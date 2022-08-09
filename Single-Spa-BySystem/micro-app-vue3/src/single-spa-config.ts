import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import createRouter from "./router";
import { AppProps } from "single-spa";

interface MyAppProps {
  base: string;
  mode: "hash" | "history";
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: async (props: AppProps & MyAppProps) => {
    return {
      render() {
        return h(App, props);
      },
    };
  },
  handleInstance(app, { mode, base, mountParcel }: AppProps & MyAppProps) {
    app.use(createRouter(mode, base, mountParcel));
  },
});

export const { bootstrap, mount, unmount, update } = vueLifecycles;
