import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router";
import "regenerator-runtime/runtime";
import App from "../App";
import routes from "../routes";

globalThis.React = React;

interface RenderProps {
  url?: string;
}

function findRoute(url: string) {
  for (const route of routes) {
    const match = matchPath(url, route);
    if (match) {
      return { match, route };
    }
  }
}

export default async function render(props: RenderProps) {
  const { url = "/" } = props;
  const routeInfo = findRoute(url);
  let state = {};
  if (routeInfo) {
    const { route, match } = routeInfo;
    const prefetcher = route.page?.prefetch;
    if (prefetcher) {
      state = (await prefetcher(match)) || {};
    }
  }
  const html = renderToString(
    <StaticRouter location={{ pathname: url }}>
      <App {...state} />
    </StaticRouter>
  );
  return { html, state };
}
