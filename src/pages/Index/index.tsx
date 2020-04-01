import Pagination from "antd/es/pagination";
import React, { ReactElement } from "react";
import { BasePage } from "../../common/base-page";
import { usePrefetchData } from "../../common/data-provider/prefetch";
import { getAllSearchParams } from "../../common/route-utli";
import { setPageMetadata } from "../../common/ssr-util";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import FriendsLinkPanel from "../../components/panels/friends-link";
import LoginUserPanel from "../../components/panels/login-user";
import QQGroupPanel from "../../components/panels/qq-group";
import Topic from "../../model/topic";
import { getTopics } from "./helper";
import "./index.less";
import TopicItem from "./topic";

const types = [
  { type: "all", title: "全部" },
  { type: "good", title: "精华" },
  { type: "new", title: "最新" },
  { type: "cold", title: "冷门" },
  { type: "job", title: "招聘" }
];

interface IndexProps {
  type?: string;
  topics?: Topic[];
  page?: number;
  size?: number;
  total?: number;
}

const Index: BasePage<IndexProps> = {
  async prefetch(_, search) {
    const params = getAllSearchParams(search);
    const { type = "all", page = "1", size = "10" } = params;
    const { topics, total } = await getTopics(
      type,
      parseInt(page),
      parseInt(size)
    );

    return {
      topics,
      type,
      page: parseInt(page),
      size: parseInt(size),
      total
    };
  },
  page() {
    setPageMetadata({ title: "首页 - Deno中文社区" });
    const [
      { page = 1, size = 10, total = 0, topics = [], type = "all" }
    ] = usePrefetchData(Index);

    return (
      <DefaultLayout
        className="page-index"
        sides={
          <>
            <LoginUserPanel />
            <FriendsLinkPanel />
            <QQGroupPanel />
          </>
        }
      >
        <BasePanel
          style="white"
          className="topics"
          header={
            <div className="header">
              {types.map(item => (
                <a key={item.type} href={`/?type=${item.type}`}>
                  <span
                    role="button"
                    className={item.type === type ? "active" : ""}
                  >
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          }
        >
          <ul className="list">
            {topics.map(topic => (
              <TopicItem topic={topic} key={topic._id.$oid} />
            ))}
          </ul>

          <Pagination
            current={page}
            total={total}
            hideOnSinglePage
            pageSize={size}
            itemRender={(page, _, el) => {
              return React.cloneElement(el as ReactElement, {
                href: `/?type=${type}&page=${page}&size=${size}`
              });
            }}
          />
        </BasePanel>
      </DefaultLayout>
    );
  }
};

export default Index;
