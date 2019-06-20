import { faCommentDots, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps } from "react-router";
import DefaultLayout from "../../components/layouts/default";
import MarkdownPreview from "../../components/markdown-preview";
import BasePanel from "../../components/panels/base-panel";
import UserInfoPanel from "../../components/panels/user-info";
import detailStore from "../../store/detail";
import "./$id.less";

@observer
export default class Detail extends DefaultLayout<
  RouteComponentProps<{ id?: string }>
> {
  componentWillMount() {
    detailStore.load(this.props.match.params.id);
  }

  renderContent(): JSX.Element {
    return (
      <BasePanel white className="page-detail" header={this.renderHeader()}>
        <MarkdownPreview content={detailStore.topic.content} />
      </BasePanel>
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
          <span className="time">发布于 {detailStore.topic.created_at}</span>
          <span className="icon">
            <FontAwesomeIcon icon={faEye} />
            {detailStore.topic.reply_count}
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faCommentDots} />
            {detailStore.topic.view_count}
          </span>
        </div>
      </>
    );
  }

  renderSide(): JSX.Element {
    return (
      <>
        <UserInfoPanel user={detailStore.topic.author} />
      </>
    );
  }
}
