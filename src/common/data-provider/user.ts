import { useCallback, useEffect, useState } from "react";
import User from "../../model/user";
import { EventsCenter } from "../events";
import GlobalData, { DataStatus } from "../global";

const EVENT_LOGIN_USER_DATA_CHANGE = "EVENT_LOGIN_USER_DATA_CHANGE";

export function useUserData(): [User | undefined, (user: User) => void] {
  const [user, _setUser] = useState(GlobalData.providers.user.value);

  const setUser = useCallback(user => {
    GlobalData.providers.user = { status: DataStatus.Ready, value: user };
    EventsCenter.trigger(EVENT_LOGIN_USER_DATA_CHANGE, user);
  }, []);

  useEffect(() => {
    EventsCenter.on(EVENT_LOGIN_USER_DATA_CHANGE, _setUser);
    if (GlobalData.providers.user.status === DataStatus.NotReady) {
      GlobalData.providers.user.status = DataStatus.Pending;
      fetch(`${GlobalData.apiBase}/api/user/me`)
        .then(res => res.json())
        .then(({ data: user }) => {
          setUser(user);
        });
    }
    return () => EventsCenter.off(EVENT_LOGIN_USER_DATA_CHANGE, _setUser);
  }, []);

  return [user, setUser];
}
