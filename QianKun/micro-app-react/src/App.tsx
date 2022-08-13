import React from "react";
import { QianKunPropsType } from "./main";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App(props: QianKunPropsType) {
  const { base, mode } = props;
  const Router = mode === "history" ? BrowserRouter : HashRouter;
  return (
    <div className="App">
      <h3>Micro-App-React 微应用</h3>
      <Router basename={base}>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/about">关于</NavLink>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
