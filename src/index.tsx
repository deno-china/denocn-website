import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import { findRoute, prefetch } from "./common/route-utli";

const restore_state = (window as any)["__INIT_STATE__"] || {};

function LocalPrefetcher(props: { onState(state: any): void }) {
  const { onState } = props;
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const route = findRoute(pathname);
    prefetch(route).then(onState);
  }, [location.pathname]);

  return null;
}

function AppEntry() {
  const [state, setState] = useState(restore_state);
  return (
    <BrowserRouter>
      <LocalPrefetcher onState={setState} />
      <App {...state} />
    </BrowserRouter>
  );
}

ReactDOM.render(<AppEntry />, document.getElementById("app"));
