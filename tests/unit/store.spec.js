import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { actions, mutations } from "../../src/store/store";
describe("actions", () => {
  let store;
  let setDataMock;

  beforeEach(() => {
    setDataMock = jest.fn();
    store = new Vuex.Store({
      state: { data: {} },
      mutations: mutations,
      actions: {
        fetchSeries: actions.fetchSeries
      }
    });
  });

  it("mocks an ajax calling using axios", () => {
    return store
      .dispatch("fetchSeries")
      .then(() =>
        expect(store.state.data).toEqual({ title: "Mock with Jest" })
      );
  });
});
