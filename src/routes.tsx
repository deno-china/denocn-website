import React, { FunctionComponent } from "react";
import About from "./pages/About";
import ErrorPage from "./pages/Error";
import GettingStart from "./pages/GettingStart";
import Index from "./pages/Index";

interface RouteInfo {
  path: string;
  exact?: boolean;
  component: FunctionComponent<any>;
}

const routes: RouteInfo[] = [
  {
    exact: true,
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/getting-start",
    component: GettingStart
  },
  {
    path: "/error",
    component: ErrorPage
  },
  {
    path: "*",
    component: () => <ErrorPage title="404 NotFound" />
  }
];

export default routes;
