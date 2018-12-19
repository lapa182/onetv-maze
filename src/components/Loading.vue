<template>
  <div>
    <figure class="overlay is-128x128">
      <img src="/images/nyan-cat.gif" width="128" height="128" />
    </figure>
  </div>
</template>
<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
