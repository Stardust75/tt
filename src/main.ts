import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.mount("#app");
app.use(router);
app.use(pinia);
