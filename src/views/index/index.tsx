import { observer } from "mobx-react";
import React from "react";
import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/base-panel";
import FriendsLinkPanel from "../../components/panels/friends-link";
import QQGroupPanel from "../../components/panels/qq-group";
import UserInfoPanel from "../../components/panels/user-info";
import topicStore from "../../store/topic";
import userStore from "../../store/user";
import "./index.less";
import Topic from "./_topic";

const types = [
  { type: "all", title: "全部" },
  { type: "good", title: "精华" },
  { type: "new", title: "最新" },
  { type: "cold", title: "冷门" },
  { type: "job", title: "招聘" }
];

@observer
export default class Home extends DefaultLayout {
  componentWillMount() {
    topicStore.load();
  }
  renderContent(): JSX.Element {
    return (
      <div className="page-index">
        <BasePanel white className="topics" header={this.renderHeader()}>
          <ul className="list">
            {topicStore.list.map(topic => (
              <Topic topic={topic} key={topic.id} />
            ))}
          </ul>
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
        {types.map(type => {
          return (
            <span
              key={type.type}
              onClick={() => topicStore.changeType(type.type as any)}
            >
              {type.title}
            </span>
          );
        })}
      </div>
    );
  }
}
