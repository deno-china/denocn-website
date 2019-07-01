import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

type RouteDef = {
  path: string;
  exact?: boolean;
  component?: any;
};
// eslint-disable-next-line
const views: any = require('./views/**/*.tsx');

const routes: RouteDef[] = [];

function getRoutes(list: any, parent: string) {
  const routeNames = Object.keys(list).filter(name => !name.startsWith('_'));
  routeNames.forEach((name) => {
    const view = list[name];
    const viewComponent = view.default;
    if (viewComponent) {
      let path;
      if (name === 'index') {
        path = parent;
      } else if (name.startsWith('$')) {
        path = `${parent}:${name.slice(1)}`;
      } else {
        path = parent + name;
      }
      const route = {
        path,
        component: viewComponent,
        exact: name === 'index',
      };
      routes.push(route);
    } else {
      getRoutes(list[name], `${parent + (name === 'index' ? '' : name)}/`);
    }
  });
}


getRoutes(views, '/');

/**
 * 一个简单的约定式路由。无需配置路由，而是根据views目录下的文件自动生成路由
 *
 * @export
 * @class ViewsRouter
 * @extends {Component}
 */
@observer
class ViewsRouter extends Component<any, {}> {
  readonly state = {
    routes: routes.sort((a) => {
      // 带有exact的排在最前面
      if (a.exact) return -1;
      // 带有参数的路由排在后面
      if (a.path.indexOf('/:') > -1) return 1;
      return -1;
    }),
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.state.routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export { ViewsRouter };
