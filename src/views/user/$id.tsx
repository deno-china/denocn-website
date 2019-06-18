import React from "react";
import { RouteComponentProps } from "react-router";
import "reflect-metadata";
import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/base-panel";
import { UserModel } from "../../models/user";
import "./$id.less";

export default class ProfileUser extends DefaultLayout<
  RouteComponentProps<{ id: string }>
> {
  renderContent(): JSX.Element {
    console.log(this.props.match.params.id);
    const user: UserModel = {};
    const id = 1;
    return (
      <BasePanel header="用户信息" className="page-profile">
        <div className="register-time">注册于：{user.created_at}</div>
        <img className="avatar" src={user.avatar} alt={user.name} />
        <div className="name">
          <span>{user.nick_name}</span>
          <a href={`https://github.com/${user.github_id}`} className="github">
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
            <span>{user.topic_count}</span>
          </li>
        </ul>
      </BasePanel>
    );
  }
  renderSide(): JSX.Element {
    return <></>;
  }
  componentWillMount() {
    const id = this.props.match.params.id;
  }
}
