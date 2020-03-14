import dayjs from "dayjs";
import React from "react";
import { match } from "react-router";
import { BasePage } from "../../common/base-page";
import GlobalData from "../../common/global";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import FriendsLinkPanel from "../../components/panels/friends-link";
import QQGroupPanel from "../../components/panels/qq-group";
import "./index.less";

const User: BasePage<{
  user: any;
}> = {
  async prefetch(match: match<{ id: string }>) {
    const id = match.params.id;
    const { data } = await fetch(
      `${GlobalData.apiBase}/api/user/info/${id}`
    ).then(res => res.json());
    return { user: data };
  },
  page(props) {
    const { user = {} } = props;
    return (
      <DefaultLayout
        sides={
          <>
            <FriendsLinkPanel />
            <QQGroupPanel />
          </>
        }
      >
        <BasePanel header="用户信息" className="page-user" style="white">
          <div className="register-time">
            注册于：
            {dayjs(user.created_at).format("YYYY-MM-DD HH:mm:ss")}
          </div>
          <img className="avatar" src={user.avatar} alt={user.name} />
          <div className="name">
            <span className="nick-name">{user.nick_name}</span>
            <a
              href={`https://github.com/${user.github_name}`}
              className="github"
            >
              {user.name}
            </a>
          </div>
          <ul className="counters">
            <li>
              <h6>积分</h6>
              <span>{user.score}</span>
            </li>
            <li>
              <h6>主题</h6>
              <span>{user.topic_count || 0}</span>
            </li>
          </ul>
        </BasePanel>
      </DefaultLayout>
    );
  }
};

export default User;
