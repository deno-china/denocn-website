import { observer } from "mobx-react";
import React from "react";
import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/Base";
import FriendsLinkPanel from "../../components/panels/FriendsLink";
import UserInfoPanel from "../../components/panels/UserInfo";
import userStore from "../../store/user";
import "./index.less";
import Topic from "./_Topic";

@observer
export default class Home extends DefaultLayout {
  renderContent(): JSX.Element {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div className="page-index">
        <BasePanel className="topics" header={this.renderHeader()}>
          <div className="list">
            {arr.map(i => (
              <Topic key={i} />
            ))}
          </div>
        </BasePanel>
      </div>
    );
  }
  renderSide(): JSX.Element {
    return (
      <>
        <UserInfoPanel user={userStore.info} />
        <FriendsLinkPanel />
      </>
    );
  }
  renderHeader() {
    return (
      <div className="header">
        <a href="/">活跃</a>
        <a href="/?type=good">精华</a>
        <a href="/?type=new">最新</a>
        <a href="/?type=noreply">零回复</a>
        <a href="/?type=job">招聘</a>
      </div>
    );
  }
  // render() {
  //   return <DefaultLayout className="page-index" />;
  // }
}
