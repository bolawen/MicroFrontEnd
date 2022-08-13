import { createApp } from "vue";
import App from "./App.vue";
import { start, actions } from "./qiankun.config";

const app = createApp(App);
app.mount("#app");
start();
window.actions = actions;
