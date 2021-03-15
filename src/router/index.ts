import { createWebHistory, createRouter } from "vue-router";
import List from "@/components/ExpensesList.vue";
import Calendar from "@/components/Calendar.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
    props: {
        expenses: "expenses"
    }
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    props: {
        expenses: "expenses"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;