<template>
  <h1>Expenses App</h1>
  <ExpenseInsert @submit-expense="addExpense" />
  <div>
	<div class="routing">
		<router-link to="/">List</router-link> |
		<router-link to="/calendar">Calendar</router-link> | 
		<router-link to="/categories">Categories</router-link>
	</div>
	<router-view :expenses="expenses" />
  </div>

</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import store from "./store/store";

import ExpenseInsert from "./components/ExpenseInsert.vue";
import ExpensesList from "./components/ExpensesList.vue";
import Calendar from "./components/Calendar.vue";
import Categories from "./components/Categories.vue";

@Options({
	components: {
		ExpenseInsert,
		ExpensesList,
		Calendar,
		Categories
	},
	methods: {}
})
export default class App extends Vue {
	public expenses: any[] = [];

	async mounted() {
		const categories = await axios.get(process.env.VUE_APP_CATEGORIES_URL + '/categories');
		store.state.categories = categories.data;
	}

	created() {
		this.getEvents();
	}

	public addExpense(expense: any) {
		this.expenses = [...this.expenses, expense];
	}

	public getEvents() {
		return this.expenses;
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
}

.routing {
	margin-bottom: 2em;
}
</style>
