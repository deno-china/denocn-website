import { FunctionComponent } from "react";
import { match } from "react-router";

export interface BasePage<T = any> {
  page: FunctionComponent<T>;
  prefetch?(match: match<any>): Promise<T | null | undefined>;
}
