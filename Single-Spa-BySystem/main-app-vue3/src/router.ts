import { AppProps } from "single-spa";
import { h, ref } from "vue";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Parcel from "./parcel";

export default function create(
  mode: string,
  base: string,
  mountParcel: AppProps["mountParcel"]
) {
  return createRouter({
    history:
      mode === "history" ? createWebHistory(base) : createWebHashHistory(base),
    routes: [
      {
        path: "/micro-app-vue3",
        component: async function () {
          const parcelConfig = await window.System.import("micro-app-vue3");
          return {
            setup() {
              let parcelProps = ref({
                status: "init",
              });
              setTimeout(() => {
                parcelProps.value = {
                  status: "update",
                };
              }, 2000);
              return () =>
                h(Parcel, {
                  config: parcelConfig,
                  mountParcel,
                  parcelProps: parcelProps.value,
                });
            },
          };
        },
      },
      {
        path: "/micro-app-react",
        component: async function () {
          const parcelConfig = await window.System.import("micro-app-react");
          return {
            setup() {
              let parcelProps = ref({
                status: "init",
              });
              setTimeout(() => {
                parcelProps.value = {
                  status: "update",
                };
              }, 2000);
              return () =>
                h(Parcel, {
                  config: parcelConfig,
                  mountParcel,
                  parcelProps: parcelProps.value,
                });
            },
          };
        },
      },
    ],
  });
}
