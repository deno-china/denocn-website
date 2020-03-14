import React from "react";
import { Route, Switch } from "react-router";
import "regenerator-runtime/runtime";
import routes from "./routes";

const EmptyComponent = () => null;

export default function App() {
  return (
    <Switch>
      {routes.map(route => {
        const Component = route.page?.page ?? route.component ?? EmptyComponent;
        return (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            component={Component}
          />
        );
      })}
    </Switch>
  );
}
