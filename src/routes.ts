import { FunctionComponent } from "react";
import About from "./pages/About";
import GettingStart from "./pages/GettingStart";
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
  },
  {
    path: "/getting-start",
    component: GettingStart
  }
];

export default routes;
