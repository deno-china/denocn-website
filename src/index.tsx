import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./app";
import "./styles/app.less";

function AppEntry() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  );
}

const appElement = document.getElementById("app")!;
ReactDOM.hydrate(<AppEntry />, appElement);

// 由于服务端先渲染了节点，本地样式在js执行之前可能会错乱，因此延迟展示
appElement.style.display = "block";
