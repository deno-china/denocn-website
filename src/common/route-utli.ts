import { match, matchPath } from "react-router";
import routes, { RouteInfo } from "../routes";

interface MatchRouteInfo {
  match: match<any>;
  route: RouteInfo;
}
export function findRoute(url: string): MatchRouteInfo | undefined {
  for (const route of routes) {
    const match = matchPath(url, route);
    if (match) {
      return { match, route };
    }
  }
}

export async function prefetch(routeInfo?: MatchRouteInfo): Promise<any> {
  let state = {};
  if (routeInfo) {
    const { route, match } = routeInfo;
    const prefetcher = route.page?.prefetch;
    if (prefetcher) {
      state = (await prefetcher(match)) || {};
    }
  }
  return state;
}
