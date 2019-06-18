import { observer } from "mobx-react";
import React from "react";
import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/base-panel";
import FriendsLinkPanel from "../../components/panels/friends-link";
import QQGroupPanel from "../../components/panels/qq-group";
import UserInfoPanel from "../../components/panels/user-info";
import userStore from "../../store/user";
import "./index.less";
import Topic from "./_topic";

@observer
export default class Home extends DefaultLayout {
  renderContent(): JSX.Element {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div className="page-index">
        <BasePanel white className="topics" header={this.renderHeader()}>
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
        <QQGroupPanel />
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
