import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

export interface AppPropsType {
  base?: string;
  mode?: "hash" | "history";
}

function App(props: AppPropsType) {
  const Router = props.mode === "history" ? BrowserRouter : HashRouter;
  return (
    <Router basename={props.base}>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/about">关于</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
