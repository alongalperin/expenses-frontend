<template>
    <FullCalendar :options="options" :events="expenses" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FullCalendar from "primevue/fullcalendar";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

@Options({
    components: { FullCalendar },
    props: ["expenses"],
})
export default class App extends Vue {
  private options: {} = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialDate: "2021-03-13",
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    editable: true,
  };
}
</script>
<style scoped>

</style>