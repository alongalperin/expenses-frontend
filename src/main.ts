import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import store from "./store/store";

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-green/theme.css";
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue);
app.use(ConfirmationService);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.component("Dialog", Dialog);

app.mount("#app");
