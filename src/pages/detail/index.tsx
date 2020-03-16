import React from "react";
import { match } from "react-router";
import { BasePage } from "../../common/base-page";
import { usePrefetchData } from "../../common/data-provider/prefetch";
import { useUserData } from "../../common/data-provider/user";
import GlobalData from "../../common/global";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import MarkdownContainer from "../../components/markdown/Container";
import Reply from "../../model/reply";
import Topic from "../../model/topic";
import AddReply from "./add-reply";
import DetailHeader from "./header";
import "./index.less";
import RepliesPanel from "./replies";

interface DetailPrefetchProps {
  topic?: Topic;
  replies?: Reply[];
}

const Detail: BasePage<DetailPrefetchProps> = {
  async prefetch(match: match<{ id: string }>) {
    const { id } = match.params;
    const { data: topic } = await fetch(
      `${GlobalData.apiBase}/api/topic/detail/${id}`
    ).then(res => res.json());

    const {
      data: { list: replies }
    } = await fetch(`${GlobalData.apiBase}/api/reply/list/${id}`).then(res =>
      res.json()
    );

    return { topic, replies };
  },
  page() {
    const [{ topic, replies = [] }, reload] = usePrefetchData(Detail);
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

        <RepliesPanel replies={replies} />
        {user && <AddReply topicId={topic._id.$oid} onAddReply={reload} />}
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
