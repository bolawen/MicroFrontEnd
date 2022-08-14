import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  Router,
} from "vue-router";

import Home from "./Home.vue";
import Content from "./Content.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/content/:microApp*",
    name: "Content",
    component: Content,
  },
];

export default function create(mode?: string, base?: string): Router {
  return createRouter({
    history:
      mode === "history" ? createWebHistory(base) : createWebHashHistory(base),
    routes,
  });
}
