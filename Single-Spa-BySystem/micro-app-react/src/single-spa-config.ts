import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return React.createElement("div",null,"错误");
  },
});

export const { bootstrap, mount, unmount } = lifecycles;