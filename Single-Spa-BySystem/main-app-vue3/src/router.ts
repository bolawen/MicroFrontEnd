import {
  Router,
  createRouter,
  RouteRecordRaw,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "./Home.vue";
import Content from "./Content.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/content/:microApp*",
    name: "Content",
    component: Content,
  },
];

export default function create(base?: string, mode?: string): Router {
  return createRouter({
    history:
      mode === "history" ? createWebHistory(base) : createWebHashHistory(base),
    routes,
  });
}
