<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      this.$emit('update-page', this.currentPage - 1);
    },
    nextPage() {
      this.$emit('update-page', this.currentPage + 1);
    }
  }
}
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  
}
.pagination span {
  color: #fa6400;
}
.pagination button {
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  padding: 12px;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
