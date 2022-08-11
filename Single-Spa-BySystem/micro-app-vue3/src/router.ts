import {
  Router,
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

export default function create(base?: string, mode?: string): Router {
  return createRouter({
    history:
      mode === "history" ? createWebHistory(base) : createWebHashHistory(base),
    routes,
  });
}
