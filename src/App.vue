<template>
	<h1>Expenses App</h1>
	<ExpenseInsert @submit-expense="addExpense" />
	<div>
    <router-link to="/">List</router-link> |
		<router-link to="/calendar">Calendar</router-link>
		<router-view :expenses="expenses" />
	</div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { Options, Vue } from "vue-class-component";
import ExpenseInsert from "./components/ExpenseInsert.vue";
import ExpensesList from "./components/ExpensesList.vue";
import Calendar from "./components/Calendar.vue";

@Options({
	components: {
		ExpenseInsert,
		ExpensesList,
		Calendar
	},
	methods: {}
})
export default class App extends Vue {
	public expenses: any[] = [];

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
</style>
