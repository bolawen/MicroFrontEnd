import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import Content from "./Content";

function App(props: any) {
  console.log("Micro-App-React props", props);
  const { base, mode } = props;
  const Router = mode === "history" ? BrowserRouter : HashRouter;
  return (
    <Router basename={base}>
      <h3>Main-App-React 基座Demo</h3>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/content/">内容</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/content/*" element={<Content />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
