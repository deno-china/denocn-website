import { FunctionComponent } from "react";
import { match } from "react-router";

export interface BasePage<PrefetchType = any, PropsType = any> {
  page: FunctionComponent<PropsType>;
  prefetch?(match: match<any>): Promise<Partial<PrefetchType> | undefined>;
}
