import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Index from "./pages/Index";

interface RouteInfo {
  path: string;
  exact?: boolean;
  component: FunctionComponent;
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
  }
];

export default function Routes() {
  return (
    <Switch>
      {routes.map(route => {
        return (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
}
