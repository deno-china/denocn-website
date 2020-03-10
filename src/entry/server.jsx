import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../routes";

globalThis.React = React;

export default function render(props) {
  const { url = "/" } = props;
  return renderToString(
    <StaticRouter location={{ pathname: url }}>
      <Routes />
    </StaticRouter>
  );
}
