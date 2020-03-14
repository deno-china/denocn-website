import React from "react";
import { match, useHistory } from "react-router";
import { useToasts } from "react-toast-notifications";
import { BasePage } from "../../common/base-page";
import { useUserData } from "../../common/data-provider/user";
import GlobalData from "../../common/global";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import MarkdownContainer from "../../components/markdown/Container";
import Topic from "../../model/topic";
import DetailHeader from "./header";
import "./index.less";

interface DetailProps {
  topic?: Topic;
  replies?: any[];
}

const Detail: BasePage<DetailProps> = {
  async prefetch(match: match<{ id: string }>) {
    const { id } = match.params;
    const { data: topic } = await fetch(
      `${GlobalData.apiBase}/api/topic/detail/${id}`
    ).then(res => res.json());
    return { topic };
  },
  page(props) {
    const { topic, replies } = props;
    const history = useHistory();
    const toast = useToasts();
    const user = useUserData();

    if (!topic) {
      history.replace("/error");
      return null;
    }

    return (
      <DefaultLayout>
        <BasePanel
          style="white"
          className="page-detail"
          header={<DetailHeader topic={topic} />}
        >
          <MarkdownContainer>{topic.content}</MarkdownContainer>
        </BasePanel>

        {/* <RepliesPanel replies={replies} /> */}
        {/* {isLogged && <AddReply topicId={detailStore.topic.id as number} />} */}
        {!user && (
          <BasePanel className="page-not-logged">
            <div className="tip">登录后发表评论!</div>
            <a className="btn green" href="/api/user/login">
              通过Github登录
            </a>
          </BasePanel>
        )}
      </DefaultLayout>
    );
  }
};

export default Detail;
