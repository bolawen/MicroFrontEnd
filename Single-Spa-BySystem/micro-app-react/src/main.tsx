import packageInfo from "../package.json";
import * as app from "./single-spa-config";
import { registerApplication, start } from "single-spa";

registerApplication({
  name: packageInfo.name,
  app: app,
  activeWhen: () => true,
  customProps: {
    base: "/",
    mode: "history",
    a: 1,
    b: 2,
    c: 3,
  },
});
start({
  urlRerouteOnly: true,
});
