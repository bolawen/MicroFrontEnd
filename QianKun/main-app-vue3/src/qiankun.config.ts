import { loadMicroApp, initGlobalState, MicroApp } from "qiankun";
import microAppMap from "./microApp";

interface GlobalStateType {
  base: string;
  mode: "hash" | "history";
  name: MicroAppType;
  operation: "mount" | "unmount" | "reload";
  mountContainer: string;
  iframeUrl?: string;
}
interface MountedMicroAppMapType {
  [key: string]: MicroApp;
}
type MicroAppType = keyof typeof microAppMap;

const globalState = {
  name: "",
  operation: "mount",
};
const actions = initGlobalState(globalState);
const mountedMicroAppMap: MountedMicroAppMapType = {};

function excludeAssetFilter(assetUrl: string) {
  const whiteList: any[] = [];
  const whiteWords = ["map.qq.com", "webapi.amap"];
  if (whiteList.includes(assetUrl)) {
    return true;
  }
  return whiteWords.some((keyWord) => {
    return assetUrl.includes(keyWord);
  });
}
async function handleMount(state: GlobalStateType) {
  const { name, base, mode, iframeUrl, mountContainer } = state;
  const mountedMicroApp = mountedMicroAppMap[name];
  if (mountedMicroApp) {
    await mountedMicroApp.mount();
    return;
  }
  const microApp = microAppMap[name];
  microApp.props = {
    ...microApp.props,
    base,
    mode,
    iframeUrl,
    mountContainer,
  };
  mountedMicroAppMap[name] = loadMicroApp(microApp, {
    singular: false,
    sandbox: {
      experimentalStyleIsolation: false,
    },
    excludeAssetFilter,
  });
}
async function handleUnmount(state: GlobalStateType) {
  const { name } = state;
  const mountedMicroApp = mountedMicroAppMap[name];
  if (mountedMicroApp) {
    await mountedMicroApp.unmount();
    return;
  }
}
async function handleReload(state: GlobalStateType) {
  const { name } = state;
  const mountedMicroApp = mountedMicroAppMap[name];
  if (mountedMicroApp) {
    await mountedMicroApp.unmount();
    await mountedMicroApp.mount();
    return;
  }
}
function handleStateChange(
  newState: GlobalStateType,
  prevState: GlobalStateType
) {
  const { operation } = newState;
  switch (operation) {
    case "mount":
      handleMount(newState);
      break;
    case "unmount":
      handleUnmount(newState);
      break;
    case "reload":
      handleReload(newState);
      break;
  }
}
function watchGlobalState() {
  actions.onGlobalStateChange((newState, prevState) => {
    handleStateChange(
      newState as GlobalStateType,
      prevState as GlobalStateType
    );
  });
}

function start() {
  watchGlobalState();
}

export { start, actions };
