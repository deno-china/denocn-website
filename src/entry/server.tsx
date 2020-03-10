import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../App";

globalThis.React = React;

interface AppProps {
  url?: string;
}

export default function render(props: AppProps) {
  const { url = "/" } = props;
  return renderToString(
    <StaticRouter location={{ pathname: url }}>
      <App />
    </StaticRouter>
  );
}
