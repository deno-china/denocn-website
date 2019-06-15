import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import "reflect-metadata";
import DefaultLayout from "../../../components/layouts/default";

export default class ProfileUser extends Component<
  RouteComponentProps<{ id: string }>
> {
  componentWillMount() {
    const id = this.props.match.params.id;
  }
  render() {
    console.log(this.props.match.params.id);
    const user: any = {};
    const id = 1;
    return (
      <DefaultLayout>
        <div className="panel">
          <div className="header">用户信息</div>
          <div className="body user-profile">
            <div className="register-time">注册于：{user.createdAt}</div>
            <img className="avatar" src={user.avatar} alt={user.name} />
            <div className="name">
              <span>{user.nickName}</span>
              <a
                href={`https://github.com/${user.githubName}`}
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
                <span>{user.topicCount}</span>
              </li>
            </ul>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
