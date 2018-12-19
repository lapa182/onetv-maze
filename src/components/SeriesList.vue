<template>
  <div class="columns">
    <div class="column is-12" v-if="!series.length > 0">
      There's nothing here...
    </div>
    <div v-for="item in series" :key="item.id" class="column is-3">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img
              v-if="item.image"
              :src="item.image.original"
              :alt="item.name"
            />
            <img src="https://dummyimage.com/128x128&text=No%20Image" v-else />
          </figure>
          <h2>{{ item.name }}</h2>
        </div>
        <div class="card-content">
          <div class="content">
            <p>Last Episode</p>
            <a :href="item.lastEpisode.url" v-if="item.lastEpisode.url">
              <figure class="image is-128x128">
                <img
                  class="thumbnail"
                  v-if="item.lastEpisode.image"
                  :src="item.lastEpisode.image.medium"
                  :alt="item.lastEpisode.name"
                />
                <img
                  src="https://dummyimage.com/96x96&text=No%20Thumbnail"
                  v-else
                />
                <figcaption>
                  {{ item.lastEpisode.name }} {{ item.lastEpisode.airdate }}
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>

    <Loading v-if="loading" />
  </div>
</template>
<script>
import Loading from "./Loading.vue";
export default {
  name: "SeriesList",
  components: {
    Loading
  },
  computed: {
    series() {
      return this.$store.state.series;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  transition: height 0.5s ease-in-out;
  &:hover {
    .content {
      transition: height 0.5s ease-in-out;
      height: 250px;
    }
  }
}

.card-content {
  overflow: hidden;
  padding: 5px 0;
}

.content {
  transition: height 0.5s ease-in-out;
  height: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-weight: bold;
  margin-top: 10px;
}
</style>
