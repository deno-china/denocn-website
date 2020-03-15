import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../app";
import { setPrefetchState } from "../common/data-provider/prefetch";
import GlobalData from "../common/global";
import { findRoute, prefetch } from "../common/route-utli";

globalThis.React = React;

interface RenderProps {
  params: { url?: string; search?: string };
  api_base: string;
  data: Object;
}

export default async function render(props: RenderProps) {
  const {
    params: { url = "/", search },
    api_base = "",
    data
  } = props;

  GlobalData.apiBase = api_base;

  let routeInfo = findRoute(url);
  let state = { ...data, ...(await prefetch(routeInfo, search)) };

  setPrefetchState(state);

  const html = renderToString(
    <StaticRouter location={{ pathname: url }}>
      <App />
    </StaticRouter>
  );
  return { html, state };
}
