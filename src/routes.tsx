import React, { FunctionComponent } from "react";
import { BasePage } from "./common/base-page";
import About from "./pages/About";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/Error";
import GettingStart from "./pages/GettingStart";
import Index from "./pages/Index";
import Publish from "./pages/Publish";
import User from "./pages/User";

export interface RouteInfo {
  path: string;
  exact?: boolean;
  page?: BasePage;
  component?: FunctionComponent<any>;
}

const routes: RouteInfo[] = [
  {
    exact: true,
    path: "/",
    page: Index
  },
  {
    path: "/about",
    page: About
  },
  {
    path: "/getting-start",
    page: GettingStart
  },
  {
    path: "/error",
    page: ErrorPage
  },
  {
    path: "/user/:id",
    page: User
  },
  {
    path: "/detail/:id",
    page: Detail
  },
  {
    path: "/publish",
    page: Publish
  },
  {
    path: "*",
    component: () => <ErrorPage.page title="404 NotFound" />
  }
];

export default routes;
