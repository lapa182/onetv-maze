<template>
  <div class="field">
    <input
      type="text"
      :placeholder="placeholder"
      @keyup.enter="triggerSearch"
      :class="hasError"
    />
    <p v-if="errorMessage.statusText">Oops! {{ errorMessage.statusText }}</p>
  </div>
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
  computed: {
    hasError() {
      return Object.keys(this.$store.state.errors).length > 0
        ? "input is-danger"
        : "input";
    },
    errorMessage() {
      return this.$store.state.errors;
    }
  },
  methods: {
    triggerSearch(event) {
      this.$store.dispatch("fetchSeries", event.currentTarget.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  margin-top: 15px;
}
</style>
