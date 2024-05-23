<template>
  <div class="character-card">
        <img :src="character.image" :alt="character.name">
    <div class="character-card-title">
      <h2>{{ character.name }}</h2>
        <div class="name">
            <p>{{ character.status }} - {{ character.species }}</p>
        </div>
        <p class="character-card-data">Last known location:</p>
        <p class="character-card-name">{{ character.location.name }}</p>
        <p class="character-card-data">First seen in:</p> <!-- Используем информацию о первом эпизоде -->
        <p class="character-card-name">{{ character.episodes[0].name }}</p> <!-- Используем информацию о первом эпизоде -->
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
  height: 250px;
  width: 600px;
}

.character-card-title{
    width: 400px;
    padding-left: 20px;
    border-start-end-radius: 10px;
    border-end-end-radius: 10px;
    background-color: rgb(60, 62, 68);
    color: white;
}
.character-card-title h2 {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    margin: 0;
    padding: 10px;
}.character-card-title h2:hover {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    margin: 0;
    cursor: pointer;
    color:  rgb(255, 152, 0);;
    padding: 10px;
}
.character-card img{
    border-end-start-radius: 10px;
    border-start-start-radius: 10px;
}
.character-card-name{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 19px;
    margin: 0;
}
.character-card-name:hover{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 19px;
    cursor: pointer;
    color:  rgb(255, 152, 0);;
}
.character-card-data{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    color: rgb(158, 158, 158);;
}

.name{
    display: flex;
}

.name p{
    margin: 0;
    padding-left: 20px;
}
</style>
