import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../App";
import { findRoute, prefetch } from "../common/route-utli";

globalThis.React = React;

interface RenderProps {
  url?: string;
}

export default async function render(props: RenderProps) {
  const { url = "/" } = props;
  let routeInfo = findRoute(url);
  let state = prefetch(routeInfo);
  const html = renderToString(
    <StaticRouter location={{ pathname: url }}>
      <App {...state} />
    </StaticRouter>
  );
  return { html, state };
}
