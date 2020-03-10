import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const state = (window as any)["__INIT_STATE__"] || {};

ReactDOM.render(
  <BrowserRouter>
    <App {...state} />
  </BrowserRouter>,
  document.getElementById("app")
);
