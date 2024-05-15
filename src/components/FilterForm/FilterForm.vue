<template>
  <form @submit.prevent="applyFilters">
    <label>
      Name:
      <input type="text" v-model="filters.name">
    </label>
    <label>
      Status:
      <select v-model="filters.status">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
    <button type="submit">Apply</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        name: '',
        status: ''
      }
    }
  },
  methods: {
    applyFilters() {
      this.$emit('apply-filters', this.filters);
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>
