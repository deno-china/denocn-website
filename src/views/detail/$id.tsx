import {
  faClock,
  faCommentDots,
  faEdit,
  faEye,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps } from "react-router";
import DefaultLayout from "../../components/layouts/default";
import MarkdownPreview from "../../components/markdown-preview";
import BasePanel from "../../components/panels/base-panel";
import FriendsLinkPanel from "../../components/panels/friends-link";
import QQGroupPanel from "../../components/panels/qq-group";
import UserInfoPanel from "../../components/panels/user-info";
import detailStore from "../../store/detail";
import userStore from "../../store/user";
import "./$id.less";
import AddReply from "./_add-reply";
import RepliesPanel from "./_replies";

@observer
export default class Detail extends DefaultLayout<
  RouteComponentProps<{ id?: string }>
> {
  componentWillMount() {
    detailStore.load(this.props.match.params.id);
  }

  renderContent(): JSX.Element {
    return (
      <>
        <BasePanel white className="page-detail" header={this.renderHeader()}>
          <MarkdownPreview content={detailStore.topic.content} />
        </BasePanel>

        <RepliesPanel replies={detailStore.replies} />

        <AddReply topicId={detailStore.topic.id} />
      </>
    );
  }

  renderHeader() {
    return (
      <>
        <h2>{detailStore.topic.title}</h2>
        <div>
          {detailStore.topic.is_top && (
            <i className="tag" style={{ background: "#fbbd08" }}>
              置顶
            </i>
          )}
          {detailStore.topic.is_good && <i className="tag">精华</i>}
          <span className="time">
            <FontAwesomeIcon icon={faClock} color="#bbb" />
            发布于 {detailStore.topic.created_at}
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
            <button className="edit">
              <FontAwesomeIcon icon={faEdit} />
              编辑
            </button>
            <button className="del">
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
        <UserInfoPanel title="作者" user={detailStore.topic.author} />
        <FriendsLinkPanel />
        <QQGroupPanel />
      </>
    );
  }
}
