import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import { findRoute, prefetch } from "./common/route-utli";

const restore_state = (window as any)["__INIT_STATE__"] || {};

function LocalPrefetcher(props: { onState(state: any): void; children?: any }) {
  const { onState, children } = props;
  const [prefetching, setPrefetching] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const route = findRoute(pathname);
    if (route) {
      prefetch(route)
        .then(onState)
        .then(() => {
          setPrefetching(false);
        });
    } else {
      setPrefetching(false);
    }
  }, [location.pathname]);

  return prefetching ? null : children;
}

function AppEntry() {
  const [state, setState] = useState(restore_state);
  return (
    <BrowserRouter>
      <ToastProvider>
        <LocalPrefetcher onState={setState}>
          <App {...state} />
        </LocalPrefetcher>
      </ToastProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppEntry />, document.getElementById("app"));
