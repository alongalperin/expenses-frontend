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
      console.log('from store');
      console.log(expense);

      await axios.post(`${process.env.VUE_APP_EXPENSES_URL}/expenses`, {
        description: expense.description,
        price: expense.price,
        categoryId: expense.categoryId
      });
      // commit('addCategory', category);
    },
    async deleteExpense({ commit }, expenseId: any) {
      await axios.delete(`${process.env.VUE_APP_EXPENSES_URL}/expenses/${expenseId.expenseId}`);
    },
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
