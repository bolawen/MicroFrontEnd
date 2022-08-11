import App from "./App.vue";
import { h, createApp } from "vue";
import createRouter from "./router";
import { AppProps } from "single-spa";
import singleSpaVue from "single-spa-vue";

type PropsType = AppProps & { base: string; mode: "hash" | "history" };

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render(props: PropsType) {
      return h(App, {
        ...props,
      });
    },
  },
  handleInstance(app, props: PropsType) {
    const { base, mode } = props;
    app.use(createRouter(base, mode));
  },
});

export const { bootstrap, mount, unmount, update } = vueLifecycles;
