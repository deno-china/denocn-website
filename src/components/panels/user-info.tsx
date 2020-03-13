import React from "react";
import { Link } from "react-router-dom";
import User from "../../model/user";
import BasePanel from "../base-panel";
import "./user-info.less";

interface UserInfoPanelProps {
  user: User;
  mySelf?: boolean;
  title?: string;
}

export default function UserInfoPanel(props: UserInfoPanelProps) {
  if (!props.user) return null;
  return (
    <BasePanel className="panel-user-info" header={props.title || "用户"}>
      <Link
        to={props.mySelf ? "/user/profile" : `/user/${props.user._id.$oid}`}
      >
        <img src={props.user.avatar} alt="" />
      </Link>
      <div style={{ float: "left" }}>
        <Link
          to={props.mySelf ? "/user/profile" : `/user/${props.user._id.$oid}`}
          className="name"
        >
          {props.user.nick_name}
        </Link>
        <div className="score">
          积分: <span>{props.user.score}</span>
        </div>
      </div>
      <div className="bio">{props.user.signature}</div>
    </BasePanel>
  );
}
