import moment from "moment";
import "moment/locale/zh-cn";
import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { ViewsRouter } from "./routes";
moment.locale("zh-cn");

class App extends React.Component {
  render() {
    return <ViewsRouter />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
