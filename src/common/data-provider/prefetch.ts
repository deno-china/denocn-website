import { useEffect, useState } from "react";
import { useRouteMatch, useLocation } from "react-router";
import { BasePage } from "../base-page";

let restore_state = (window as any)["__INIT_STATE__"];

export function setPrefetchState(state: any) {
  restore_state = state;
}

export function usePrefetchData<T>(page: BasePage<T>): Partial<T> {
  const match = useRouteMatch();
  const location = useLocation();
  const [data, setData] = useState<Partial<T> | undefined>(restore_state);

  useEffect(() => {
    (async () => {
      if (!restore_state && page.prefetch) {
        const state = await page.prefetch(match, location.search);
        setData(state);
      } else {
        restore_state = undefined;
      }
    })();
  }, []);

  return data || {};
}
