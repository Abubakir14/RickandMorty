<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name">
        <div class="character-card-title">
            <h2>{{ character.name }}</h2>
        <div class="name">
            <p> {{ character.status }}</p>
            <p> - </p>
            <p> {{ character.species }}</p>
        </div>
            <p>Last known location: {{ character.origin.name }}</p>
            <p>First seen in: {{ character.name }}</p>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        character: {
            type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.character-card {
    display: flex;
  margin: 10px;
  height: 200px;
  width: 650px;
  text-align: center;
}

.character-card-title{
    width: 400px;
    border-start-end-radius: 10px;
    border-end-end-radius: 10px;
  background-color: rgb(60, 62, 68);
  color: white;
}

.character-card img{
    border-end-start-radius: 10px;
    border-start-start-radius: 10px;
}

.name{
    display: flex;
    justify-content: center;
}
</style>
