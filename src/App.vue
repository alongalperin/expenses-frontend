<template>
  <h1>Expenses App</h1>
  <ExpenseInsert @submit-expense="addExpense" />
  <div style="margin-top: 500px">
    <FullCalendar :options="options" :events="events" />
    {{ getP() }}
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import FullCalendar from "primevue/fullcalendar";

import { Options, Vue } from "vue-class-component";
import ExpenseInsert from "./components/ExpenseInsert.vue";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

@Options({
  components: {
    ExpenseInsert,
    FullCalendar,
  },
  methods: {
    getP() {
      return process.env.test ? process.env.ROOT_API : "no";
    },
  },
})
export default class App extends Vue {
  private expenses: any[] = [];
  private events: any[] = [];

  created() {
    this.getEvents();
    // const that = this;
    // setTimeout(() => {
    //   that.events = [
    //     ...that.events,
    //     {
    //       id: 2,
    //       title: "All Day Event2",
    //       start: "2021-02-27",
    //     },
    //   ];
    //   console.log(that.events);
    // }, 2000);

    // this.events.push({
    //   "id": 2,
    //   "title": "All Day Event2",
    //   "start": "2021-02-27"
    // })
  }

  private options: {} = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialDate: "2021-02-27",
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    editable: true,
  };

  public addExpense(expense: any) {
    console.log("add event");
    console.log(expense);
    this.expenses.push(expense);
    this.events = [...this.events, expense];
  }

  public getEvents() {
    // this.events =  [
    //   {
    //     "id": 1,
    //     "title": "All Day Event",
    //     "start": "2021-02-27"
    //   }
    // ]
    console.log(this.events);
    return this.events;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
