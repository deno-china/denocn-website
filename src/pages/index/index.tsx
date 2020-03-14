import React from "react";
import { Link, match, useHistory } from "react-router-dom";
import { BasePage } from "../../common/base-page";
import { usePrefetchData } from "../../common/data-provider/prefetch";
import GlobalData from "../../common/global";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Pagination from "../../components/pagination";
import FriendsLinkPanel from "../../components/panels/friends-link";
import LoginUserPanel from "../../components/panels/login-user";
import QQGroupPanel from "../../components/panels/qq-group";
import Topic from "../../model/topic";
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
  pageSize?: number;
  total?: number;
}

const Index: BasePage<IndexProps> = {
  async prefetch(
    match: match<{
      type?: string;
      page?: string;
      pageSize?: string;
    }>
  ) {
    const { type = "all", page = "0", pageSize = "10" } = match.params;
    const {
      data: { list: topics = [], total }
    } = await fetch(`${GlobalData.apiBase}/api/topic/${type}`).then(res =>
      res.json()
    );

    return {
      topics,
      type,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      total
    };
  },
  page() {
    const {
      page = 1,
      pageSize = 10,
      total = 0,
      topics = [],
      type = "all"
    } = usePrefetchData(Index);
    const history = useHistory();

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
                <Link key={item.type} replace to={`/?type=${item.type}`}>
                  <span
                    role="button"
                    className={item.type === type ? "active" : ""}
                  >
                    {item.title}
                  </span>
                </Link>
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
            page={page}
            total={total}
            size={pageSize}
            onChange={(page, size) => {
              history.replace(`/?type=${type}&page=${page}?pageSize=${size}`);
            }}
          />
        </BasePanel>
      </DefaultLayout>
    );
  }
};

export default Index;
