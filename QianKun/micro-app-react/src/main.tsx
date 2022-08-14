import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import packageInfo from "../package.json";

export interface QianKunPropsType {
  base: string;
  mode: "hash" | "history";
  mountContainer?: string;
}

function render(props: QianKunPropsType) {
  const { base, mode, mountContainer = "" } = props;
  console.log(document.getElementById(mountContainer))
  ReactDOM.createRoot(document.getElementById(mountContainer) as HTMLElement).render(
    <App base={base} mode={mode} />
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  const props: QianKunPropsType = {
    base: "/",
    mode: "history",
    mountContainer: `${packageInfo.name}`,
  };
  render(props);
}

export async function bootstrap() {
  console.log(`${packageInfo.name} bootstrap 阶段`);
}

export async function mount(props: QianKunPropsType) {
  console.log(`${packageInfo.name} mount 阶段`, props);
  render(props);
}

export async function unmount() {
  console.log(`${packageInfo.name} mount 阶段`);
}
