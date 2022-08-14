import App from "./App.vue";
import createRouter from "./router";
import Vue, { createApp } from "vue";
import packageInfo from "../package.json";
import state from "./store";

interface PropsType {
  base: string;
  mode: "hash" | "history";
  container: Element | string;
  iframeUrl?: string;
}

let instance: Vue.App<Element>;

function render(props: PropsType) {
  const { base, mode, container } = props;
  instance = createApp(App);
  instance.use(createRouter(mode, base));
  instance.mount(container);
}

if (!window.__POWERED_BY_QIANKUN__) {
  const props: PropsType = {
    base: "/",
    mode: "history",
    container: `#${packageInfo.name}`,
  };
  render(props);
}

export async function bootstrap(): Promise<void> {
  console.log(`${packageInfo.name} bootstrap 阶段`);
}

export async function mount(props: PropsType): Promise<void> {
  console.log(`${packageInfo.name} mount 阶段`, props);
  const { iframeUrl = "" } = props;
  state.iframeUrl = iframeUrl;
  render(props);
}

export async function unmount(): Promise<void> {
  console.log(`${packageInfo.name} unmount 阶段`);
}
