import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App(props: any) {
  console.log("Micro-App-React props",props);
  const Router = BrowserRouter;
  return (
    <Router basename={"/"}>
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
