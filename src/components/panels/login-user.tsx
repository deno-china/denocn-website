import React from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../common/data-provider/user";
import BasePanel from "../base-panel";
import UserInfoPanel from "./user-info";

export default function LoginUserPanel() {
  const [user] = useUserData();
  if (user) {
    return (
      <>
        <UserInfoPanel user={user} mySelf />
        <BasePanel style="white">
          <Link className="btn green" to="/publish">
            发表主题
          </Link>
        </BasePanel>
      </>
    );
  }
  return (
    <BasePanel className="panel-user-info" header="Deno 开源技术社区">
      <p>您可以</p>
      <a className="btn green" href="/api/user/login">
        通过Github登录
      </a>
    </BasePanel>
  );
}
