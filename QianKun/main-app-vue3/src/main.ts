import { createApp } from "vue";
import App from "./App.vue";
import createRouter from "./router";
import { start, actions } from "./qiankun.config";
import packageInfo from "../package.json";

const app = createApp(App);
app.use(createRouter("history", "/"));
app.mount(`#${packageInfo.name}`);
start();
window.actions = actions;
