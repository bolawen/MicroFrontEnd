import { AppProps } from "single-spa";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

export default function create(
  mode: string,
  base: string,
  mountParcel: AppProps["mountParcel"]
) {
  return createRouter({
    history:
      mode === "history" ? createWebHistory(base) : createWebHashHistory(base),
    routes: [
      { path: "/", component: Home },
      { path: "/about", component: About },
    ],
  });
}
