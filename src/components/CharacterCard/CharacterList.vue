<template>
  <div class="container">
    <div>
      <filter-form @apply-filters="applyFilters" />
    </div>
      <character-card v-for="character in displayedCharacters" :key="character.id" :character="character" />
      <pagination :currentPage="currentPage" :totalPages="totalPages" @update-page="fetchCharacters" />
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard/CharacterCard.vue';
import Pagination from '@/components/Pagination/PaginationBar.vue';
import FilterForm from '@/components/FilterForm/FilterForm.vue';
import { fetchCharacters } from '@/services/rickAndMortyService';

export default {
  components: {
    CharacterCard,
    Pagination,
    FilterForm
  },
  data() {
    return {
      characters: [],
      displayedCharacters: [], // Выводимые персонажи на текущей странице
      currentPage: 1,
      perPage: 6, // Количество персонажей на странице
      totalPages: 1,
      filters: {}
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    fetchCharacters(page = 1) {
      fetchCharacters(page, this.filters)
        .then(response => {
          this.characters = response; // Обновляем characters с новыми данными
          this.totalPages = Math.ceil(this.characters.length / this.perPage); // Вычисляем общее количество страниц
          this.currentPage = page;
          this.updateDisplayedCharacters(); // Обновляем отображаемых персонажей
        })
        .catch(error => {
          console.error('Error fetching characters:', error);
        });
    },
    applyFilters(filters) {
      this.filters = filters;
      this.fetchCharacters();
    },
    updateDisplayedCharacters() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.displayedCharacters = this.characters.slice(startIndex, endIndex);
    }
  }
};
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1300px;
}
</style>
