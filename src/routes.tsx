import { observer } from "mobx-react";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

type RouteDef = {
  path: string;
  exact?: boolean;
  component?: any;
};

const views: any = require("./views/**/*.tsx");

function getRoutes(views: any, parent: string) {
  const routeNames = Object.keys(views).filter(name => !name.startsWith("_"));
  routeNames.forEach(name => {
    const view = views[name];
    const viewComponent = view.default;
    if (viewComponent) {
      let path;
      if (name === "index") {
        path = parent;
      } else if (name.startsWith("$")) {
        path = parent + ":" + name.slice(1);
      } else {
        path = parent + name;
      }
      const route = {
        path,
        component: viewComponent,
        exact: name === "index"
      };
      routes.push(route);
    } else {
      getRoutes(views[name], parent + (name === "index" ? "" : name) + "/");
    }
  });
}

const routes: RouteDef[] = [];
getRoutes(views, "/");

/**
 * 一个简单的约定式路由。无需配置路由，而是根据views目录下的文件自动生成路由
 *
 * @export
 * @class ViewsRouter
 * @extends {Component}
 */
@observer
export class ViewsRouter extends Component<any, {}> {
  readonly state = {
    routes
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.state.routes.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
