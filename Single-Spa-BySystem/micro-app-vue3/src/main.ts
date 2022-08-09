import { registerApplication, start } from "single-spa";
import * as app from "./single-spa-config";
import packageInfo from "../package.json";
registerApplication({
  name: packageInfo.name,
  app: app,
  activeWhen: () => true,
  customProps: {
    base: "/",
    mode: "history",
  },
});
start({
  urlRerouteOnly: true,
});
