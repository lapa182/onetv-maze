<template>
  <div class="container">
    <div v-for="item in series" :key="item.id">{{ item.id }}</div>
  </div>
</template>
<script>
export default {
  name: "SeriesList",
  computed: {
    series() {
      debugger;
      return this.$store.state.series;
    }
  }
};
</script>
