import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

// Получить список персонажей с учетом фильтров и параметров пагинации
export const fetchCharacters = (page = 1, filters = {}) => {
  const url = `${BASE_URL}character/?page=${page}${buildFilterParams(filters)}`;
  return axios.get(url);
};

// Формирование строки параметров фильтрации для запроса
const buildFilterParams = (filters) => {
  let params = '';
  for (const key in filters) {
    if (filters[key]) {
      params += `&${key}=${filters[key]}`;
    }
  }
  return params;
};

// Другие методы для работы с API (если необходимо)
