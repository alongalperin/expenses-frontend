import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Vue",
    categories: [
      {
        code: 1,
        name: "Food"
      },
      {
        code: 2,
        name: "Bills"
      }
    ]
  },
});

export default store;
