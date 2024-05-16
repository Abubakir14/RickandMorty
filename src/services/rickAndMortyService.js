import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

// Получить список персонажей с учетом фильтров и параметров пагинации
export const fetchCharacters = (page = 1, filters = {}) => {
  const url = `${BASE_URL}character/?page=${page}${buildFilterParams(filters)}`;
  return axios.get(url).then((response) => {
    // Получаем список персонажей
    const characters = response.data.results;

    // Формируем запросы для каждого персонажа
    const characterPromises = characters.map((character) => {
      const locationPromise = axios.get(character.origin.url);
      const episodePromises = character.episode.map((episodeUrl) =>
        axios.get(episodeUrl)
      );
      return axios
        .all([locationPromise, ...episodePromises])
        .then(([locationResponse, ...episodeResponses]) => {
          const location = locationResponse.data;
          const episodes = episodeResponses.map((response) => response.data);
          return { ...character, origin: location, episodes };
        });
    });
    // Выполняем все запросы для каждого персонажа
    return axios.all(characterPromises);
  });
};

// Формирование строки параметров фильтрации для запроса
const buildFilterParams = (filters) => {
  let params = "";
  for (const key in filters) {
    if (filters[key]) {
      params += `&${key}=${filters[key]}`;
    }
  }
  return params;
};

// Другие методы для работы с API (если необходимо)
