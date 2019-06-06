import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { ViewsRouter } from "./routes";

class App extends React.Component {
  render() {
    return <ViewsRouter />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
