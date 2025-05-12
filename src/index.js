import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Ensure your global styles are imported
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop >
    <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);