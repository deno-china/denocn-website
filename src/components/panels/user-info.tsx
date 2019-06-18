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
      <Link to={'/publish'} className="btn green">发布新话题</Link>
    </BasePanel>
  ) : (
    <BasePanel className="panel-user-info" header="DENOCN：Deno 开源技术社区">
      <p>您可以</p>
      <a className="btn green" href="/api/user/login">通过github登录</a>
    </BasePanel>
  );
};

export default UserInfoPanel;
