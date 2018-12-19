<template>
  <input
    type="text"
    :placeholder="placeholder"
    @keyup.enter="triggerSearch"
    class="input"
  />
</template>

<script>
export default {
  name: "SearchField",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "Search or favourite a TV series"
    }
  },
  methods: {
    triggerSearch(event) {
      this.$store.dispatch("fetchSeries", event.currentTarget.value);
      event.currentTarget.value = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
