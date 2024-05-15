<template>
  <div>
    <character-card v-for="character in characters" :key="character.id" :character="character" />
    <pagination :currentPage="currentPage" :totalPages="totalPages" @update-page="fetchCharacters" />
    <filter-form @apply-filters="applyFilters" />
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
      currentPage: 1,
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
          this.characters = response.data.results;
          this.totalPages = response.data.info.pages;
          this.currentPage = page;
        })
        .catch(error => {
          console.error('Error fetching characters:', error);
        });
    },
    applyFilters(filters) {
      this.filters = filters;
      this.fetchCharacters();
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
