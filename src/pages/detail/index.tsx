import React from "react";
import { match } from "react-router";
import { BasePage } from "../../common/base-page";
import { usePrefetchData } from "../../common/data-provider/prefetch";
import { useUserData } from "../../common/data-provider/user";
import GlobalData from "../../common/global";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import MarkdownContainer from "../../components/markdown/Container";
import Topic from "../../model/topic";
import DetailHeader from "./header";
import "./index.less";

interface DetailPrefetchProps {
  topic?: Topic;
  replies?: any[];
}

const Detail: BasePage<DetailPrefetchProps> = {
  async prefetch(match: match<{ id: string }>) {
    const { id } = match.params;
    const { data: topic } = await fetch(
      `${GlobalData.apiBase}/api/topic/detail/${id}`
    ).then(res => res.json());
    return { topic };
  },
  page() {
    const { topic, replies } = usePrefetchData(Detail);
    const user = useUserData();

    if (!topic) {
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
