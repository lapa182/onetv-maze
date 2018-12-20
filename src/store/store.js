import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    series: [],
    favourites: [],
    loading: false,
    errors: {}
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_SERIES(state, series) {
      if (state.series.find(item => item.id === series.id)) {
        state.errors = "Item already searched";
        return;
      }
      state.series.push(series);
      state.favourites.push(series);
    },
    SET_ERRORS(state, error) {
      state.errors = error;
    }
  },
  actions: {
    async fetchSeries({ commit }, params) {
      commit("SET_LOADING", true);

      try {
        let series = await api.getSeries(params);
        const lastEpisode = await api.getLastEpisode(
          series._links.previousepisode.href.split("episodes/")[1]
        );
        series = {
          ...series,
          lastEpisode: { ...lastEpisode }
        };
        commit("SET_ERRORS", []);
        commit("SET_SERIES", series);
      } catch (error) {
        commit("SET_ERRORS", error.response);
      } finally {
        commit("SET_LOADING", false);
      }
    }
  }
});
