import React, { Component } from "react";
import Footer from "../footer";
import Header from "../header";
import "./default.less";

export default abstract class DefaultLayout<P = any, S = any> extends Component<
  P,
  S
> {
  render() {
    const sides = this.renderSide();
    return (
      <div className="layout-default">
        <Header />
        <div id="main-wrapper">
          <div className={`content`}>{this.renderContent()}</div>
          {sides && <div className="side">{sides}</div>}
        </div>
        <Footer />
      </div>
    );
  }
  abstract renderContent(): JSX.Element;
  abstract renderSide(): JSX.Element;
}
