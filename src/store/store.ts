import { createStore } from "vuex";
import axios from 'axios';

export interface State {
  categories: any[]
}

const store = createStore<State>({
  state: {
    categories: [] // TODO: create empty array
  },
  actions: {
    async addCategory({ commit }, category) {
      await axios.post(`${process.env.VUE_APP_CATEGORIES_URL}/categories`, {
        name: category.name
      });
      commit('addCategory', category);
    }
  },
  mutations: {
    addCategory(state, category) {
      state.categories = [...state.categories, category];
    }
  }
});

export default store;
