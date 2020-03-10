import React from "react";
import { Route, Switch } from "react-router";
import routes from "./routes";

export default function App() {
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
