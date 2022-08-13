import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import packageInfo from "../package.json";

export interface QianKunPropsType {
  base: string;
  mode: "hash" | "history";
  container?: string;
}

function render(props: QianKunPropsType) {
  const { base, mode, container = "" } = props;
  ReactDOM.createRoot(document.getElementById(container) as HTMLElement).render(
    <App base={base} mode={mode} />
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  const props: QianKunPropsType = {
    base: "/",
    mode: "history",
    container: `${packageInfo.name}`,
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
