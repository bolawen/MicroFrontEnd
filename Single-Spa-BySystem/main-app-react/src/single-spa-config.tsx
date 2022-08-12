import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const { bootstrap, mount, unmount, update } = reactLifecycles;
