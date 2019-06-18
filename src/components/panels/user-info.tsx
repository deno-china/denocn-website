import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { UserModel } from "../../models/user";
import BasePanel from "./base-panel";
import "./user-info.less";

interface userInfoPanelProps {
  user: UserModel;
}

const UserInfoPanel: FunctionComponent<userInfoPanelProps> = props => {
  return props.user ? (
    <BasePanel className="panel-user-info" header="用户">
      <Link to={`/user/${props.user.id}`}>
        <img src={props.user.avatar} alt="" />
      </Link>
      <div style={{ float: "left" }}>
        <Link to={`/user/${props.user.id}`} className="name">
          {props.user.nick_name}
        </Link>
        <div className="score">
          积分: <span>{props.user.score}</span>
        </div>
      </div>
      <div className="bio">“ {props.user.signature} ”</div>
    </BasePanel>
  ) : (
    <BasePanel className="panel-user-info" header="用户">
      <a href="/api/user/login">登录</a>
    </BasePanel>
  );
};

export default UserInfoPanel;
