import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import createRouter from "./router";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: async (props) => {
    return {
      render() {
        return h(App, props);
      },
    };
  },
  handleInstance(app, { mode, base, mountParcel }) {
    app.use(createRouter(mode, base, mountParcel));
  },
});

export const { bootstrap, mount, unmount, update } = vueLifecycles;
