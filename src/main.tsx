import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./test.css";

// import Home from './Home'
import Todo from "./ToDo";
import Example from "./practice";
import Counter from "./practice";
import Componenet1 from "./practice";
import Test from "./testReact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Home/> */}
    {/* < Todo /> */}
    <Test />
  </StrictMode>
);
