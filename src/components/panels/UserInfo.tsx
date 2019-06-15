import React, { FunctionComponent } from "react";
import { UserModel } from "../../models/User";
import BasePanel from "./Base";
import "./UserInfo.less";
import { Link } from "react-router-dom";

interface userInfoPanelProps {
  user: UserModel;
}

const UserInfoPanel: FunctionComponent<userInfoPanelProps> = props => {
  return (
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
  );
};

export default UserInfoPanel;
