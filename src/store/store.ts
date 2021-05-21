import { createStore } from "vuex";
import axios from 'axios';

export interface State {
  categories: any[],
  expenses: any[]
}

const store = createStore<State>({
  state: {
    categories: [], // TODO: create empty array
    expenses: []
  },
  actions: {
    async addCategory({ commit }, category) {
      await axios.post(`${process.env.VUE_APP_CATEGORIES_URL}/categories`, {
        name: category.name
      });
      commit('addCategory', category);
    },
    async addExpense({ commit }, expense) {
      await axios.post(`${process.env.VUE_APP_EXPENSES_URL}/expenses`, {
        description: expense.description,
        price: expense.price
      });
      //commit('addCategory', category);
    }
  },
  mutations: {
    addCategory(state, category) {
      state.categories = [...state.categories, category];
    }
  },
  getters: {
    getCategoryNameById: (state) => (id: string) => {
      return state.categories.find(category => category.id === id).name;
    }
  }
});

export default store;
