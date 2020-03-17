import React, { FunctionComponent } from "react";
import { BasePage } from "./common/base-page";
import About from "./pages/about";
import Detail from "./pages/detail";
import ErrorPage from "./pages/error";
import GettingStart from "./pages/getting-start";
import Index from "./pages/index";
import Publish from "./pages/publish";
import User from "./pages/user";

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
    component: Publish
  },
  {
    path: "*",
    component: () => <ErrorPage.page title="404 NotFound" />
  }
];

export default routes;
