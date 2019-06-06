import React, { Component } from "react";
import Header from "../Header";
import "./default.less";

export default class DefaultLayout extends Component {
  render() {
    return (
      <div className="layout-default">
        <Header />
        <div id="main-wrapper">
          <div id="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
