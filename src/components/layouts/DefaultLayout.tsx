import React, { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import "./DefaultLayout.less";

interface DefaultLayoutProps {
  children?: ReactNode;
  sides?: ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children, sides } = props;
  return (
    <div className="layout-default">
      <Header />
      <div id="main-wrapper">
        <div className="content">{children}</div>
        {sides && <div className="side">{sides}</div>}
      </div>
      <Footer />
    </div>
  );
}
