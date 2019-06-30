import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import 'reflect-metadata';
import DefaultLayout from '../../components/layouts/default';
import BasePanel from '../../components/panels/base-panel';
import FriendsLinkPanel from '../../components/panels/friends-link';
import QQGroupPanel from '../../components/panels/qq-group';
import { UserModel } from '../../models/user';
import userStore from '../../store/user';
import './$id.less';

@observer
class ProfileUser extends DefaultLayout<RouteComponentProps<{ id: string }>> {
  renderContent(): JSX.Element {
    // console.log(this.props.match.params.id);
    const user: UserModel = userStore.info;
    // const id = 1;
    return (
      <BasePanel white header="用户信息" className="page-user">
        <div className="register-time">
          注册于：
          {user.created_at}
        </div>
        <img className="avatar" src={user.avatar} alt={user.name} />
        <div className="name">
          <span>{user.nick_name}</span>
          <a href={`https://github.com/${user.github_name}`} className="github">
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
    return (
      <>
        <FriendsLinkPanel />
        <QQGroupPanel />
      </>
    );
  }

  componentWillMount() {
    // const { id } = this.props.match.params;
  }
}
export default ProfileUser;
