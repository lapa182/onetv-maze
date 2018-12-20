import api from "./services/api";

export const actions = {
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
};
