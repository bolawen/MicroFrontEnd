import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App(props: any) {
  console.log("Micro-App-React props", props);
  const { base, mode } = props;
  const Router = mode === "history" ? BrowserRouter : HashRouter;
  return (
    <Router basename={base}>
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
