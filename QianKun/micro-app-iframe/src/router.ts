import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default function create(mode?: string, base?: string): Router {
  return createRouter({
    history:
      mode === "history" ? createWebHistory(base) : createWebHashHistory(base),
    routes,
  });
}
