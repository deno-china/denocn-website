import { FunctionComponent } from "react";
import { match } from "react-router";

export interface BasePage {
  page: FunctionComponent<any>;
  prefetch?(match: match<any>): Promise<any>;
}
