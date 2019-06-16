import React, { FunctionComponent } from "react";
import BasePanel from "./Base";
import "./UserInfo.less";

const FriendsLinkPanel: FunctionComponent = props => {
  return (
    <BasePanel className="panel-friends-link" header="友情链接">
      <a href="https://cnodejs.org" target="_blank">
        <img src={require("../../assets/imgs/cnodejs.png")} alt="" />
      </a>
    </BasePanel>
  );
};

export default FriendsLinkPanel;
