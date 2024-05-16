<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
body {
  margin: 0;
  background-color: rgb(39, 43, 51);
  padding: 0;
}
</style>
