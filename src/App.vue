<template>
  <div id="app"><SearchField /></div>
</template>

<script>
import SearchField from "./components/SearchField.vue";

export default {
  name: "app",
  components: {
    SearchField
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
