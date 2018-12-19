<template>
  <div id="app">
    <div class="container">
      <div class="section">
        <div class="columns"><SearchField class="column is-12" /></div>
        <SeriesList />
      </div>
    </div>
  </div>
</template>

<script>
import SearchField from "./components/SearchField.vue";
import SeriesList from "./components/SeriesList.vue";

export default {
  name: "app",
  components: {
    SearchField,
    SeriesList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
