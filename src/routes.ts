import { FunctionComponent } from "react";
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

export default routes;
