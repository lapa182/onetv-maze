export const mutations = {
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
};
