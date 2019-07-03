import {
  faClock,
  faCommentDots,
  faEdit,
  faEye,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import { observer } from 'mobx-react';
import React from 'react';
import Link from 'umi/link';
import { httpGet } from '../../common/request';
import DefaultLayout from '../../components/layouts/default';
import MarkdownPreview from '../../components/markdown-preview';
import BasePanel from '../../components/panels/base-panel';
import FriendsLinkPanel from '../../components/panels/friends-link';
import QQGroupPanel from '../../components/panels/qq-group';
import UserInfoPanel from '../../components/panels/user-info';
import detailStore from '../../store/detail';
import userStore from '../../store/user';
import './$id.less';
import AddReply from './_add-reply';
import RepliesPanel from './_replies';
import { UserModel } from '../../models/user';

@observer
class Detail extends DefaultLayout<any> {
  componentWillMount() {
    detailStore.load(this.props.match.params.id);
  }

  renderContent(): JSX.Element {
    const isLogged = Boolean(userStore.info && userStore.info.id);
    return (
      <>
        <BasePanel white className="page-detail" header={this.renderHeader()}>
          <MarkdownPreview content={detailStore.topic.content || ''} />
        </BasePanel>

        <RepliesPanel replies={detailStore.replies} />
        {isLogged && <AddReply topicId={detailStore.topic.id as number} />}
        {!isLogged && (
          <BasePanel className="page-not-logged">
            <div className="tip">登录后发表评论!</div>
            <a className="btn green" href="/api/user/login">
              通过Github登录
            </a>
          </BasePanel>
        )}
      </>
    );
  }

  renderHeader() {
    return (
      <>
        <h2>
          <span className="type">{detailStore.topic.type}</span>
          {detailStore.topic.title}
        </h2>
        <div>
          {detailStore.topic.is_top && (
            <i className="tag" style={{ background: '#fbbd08' }}>
              置顶
            </i>
          )}
          {detailStore.topic.is_good && <i className="tag">精华</i>}
          <span className="time">
            <FontAwesomeIcon icon={faClock} color="#bbb" />
            发布于
            {' '}
            {detailStore.topic.created_at}
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faCommentDots} />
            {detailStore.topic.reply_count}
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faEye} />
            {detailStore.topic.view_count}
          </span>
        </div>
        {userStore.info && userStore.info.id === detailStore.topic.author_id && (
          <div className="ops">
            <Link to={`/edit/${detailStore.topic.id}`}>
              <button className="edit">
                <FontAwesomeIcon icon={faEdit} />
                编辑
              </button>
            </Link>
            <button
              className="del"
              onClick={this.deleteTopic.bind(this, detailStore.topic
                .id as number)}
            >
              <FontAwesomeIcon icon={faTrash} />
              删除
            </button>
          </div>
        )}
      </>
    );
  }

  renderSide(): JSX.Element {
    return (
      <>
        <UserInfoPanel
          title="作者"
          user={detailStore.topic.author as UserModel}
        />
        <FriendsLinkPanel />
        <QQGroupPanel />
      </>
    );
  }

  async deleteTopic(id: number) {
    await Modal.confirm({
      title: '询问',
      content: '您是否要删除此主题？',
      onOk: async () => {
        await httpGet(`/api/topic/delete/${id}`);
        this.props.history.goBack();
      },
    });
  }
}

export default Detail;
