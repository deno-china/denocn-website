import { observer } from 'mobx-react';
import React from 'react';
import DefaultLayout from '../../../components/layouts/default';
import BasePanel from '../../../components/panels/base-panel';
import FriendsLinkPanel from '../../../components/panels/friends-link';
import userStore from '../../../store/user';
import './index.less';

@observer
class Profile extends DefaultLayout {
  renderContent(): JSX.Element {
    const user = userStore.info;
    return (
      <>
        <BasePanel header="个人主页" white className="page-profile">
          <div className="register-time">
            注册于：
            {user.created_at}
          </div>
          <div className="name">
            <span>{user.nick_name}</span>
            <a href={`https://github.com/${user.github_id}`} className="github">
              {user.name}
            </a>
          </div>
        </BasePanel>
        <BasePanel header="最近创建的话题" white className="page-profile">
          <div className="name">
            <span>{user.nick_name}</span>
            <a href={`https://github.com/${user.github_id}`} className="github">
              {user.name}
            </a>
          </div>
        </BasePanel>
        <BasePanel header="最近参与的话题" white className="page-profile">
          <div className="name">
            <span>{user.nick_name}</span>
            <a href={`https://github.com/${user.github_id}`} className="github">
              第一条
            </a>
          </div>
          <div className="name">
            <span>{user.nick_name}</span>
            <a href={`https://github.com/${user.github_id}`} className="github">
              第2条
            </a>
          </div>
          <div className="name">
            <span>{user.nick_name}</span>
            <a href={`https://github.com/${user.github_id}`} className="github">
              第3条
            </a>
          </div>
        </BasePanel>
      </>
    );
  }

  renderSide(): JSX.Element {
    const user = userStore.info;
    return (
      <>
        <BasePanel className="page-profile-side">
          <img className="avatar" src={user.avatar} alt={user.name} />
          <div className="name">
            {/* <span>{user.nick_name}</span> */}
            <a href={`https://github.com/${user.github_id}`} className="github">
              {user.name}
            </a>
          </div>
          <ul className="counters">
            <li>
              <h6>积分</h6>
              <span>{user.score || 0}</span>
            </li>
            <li>
              <h6>主题</h6>
              <span>{user.topic_count || 0}</span>
            </li>
          </ul>
        </BasePanel>
        <FriendsLinkPanel />
      </>
    );
  }
}

export default Profile;
