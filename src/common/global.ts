import User from "../model/user";

export enum DataStatus {
  NotReady,
  Pending,
  Ready
}

export interface Data<T> {
  status: DataStatus;
  value?: T;
}

interface GlobalDataProps {
  apiBase: string;
  providers: {
    user: Data<User>;
  };
}

const GlobalData: GlobalDataProps = {
  apiBase: "",
  providers: {
    user: { status: DataStatus.NotReady }
  }
};

export default GlobalData;
