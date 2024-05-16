<template>
  <form @submit.prevent="applyFilters" class="form">
    <label>
      Name
      <input type="text" v-model="filters.name">
    </label>
    <label>
      Status
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
.form{
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 20px;
}
.form label {
    color: aliceblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
}
.form button {
    margin-left: 20px;
    padding: 12px;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  cursor: pointer;
}


.form button:hover,
.form button:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.form button:hover {
  transform: translateY(-1px);
}

.form button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}

.form label input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
  height: 30px;
  width: 500px;
}

.form label select {
  width: 150px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
