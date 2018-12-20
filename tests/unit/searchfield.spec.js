import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import SearchField from "../../src/components/SearchField.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("SearchField.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      fetchSeries: jest.fn()
    };
    store = new Vuex.Store({
      state: { series: [], favourites: [], loading: false, errors: {} },
      actions
    });
  });

  it('dispatches "fetchSeries" when input event value is filled', () => {
    const wrapper = shallowMount(SearchField, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "input";
    input.trigger("keyup.enter");
    expect(actions.fetchSeries).toHaveBeenCalled();
  });
});
