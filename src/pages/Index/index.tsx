import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BasePage } from "../../common/base-page";
import BasePanel from "../../components/base-panel";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Pagination from "../../components/pagination";
import FriendsLinkPanel from "../../components/panels/friends-link";
import LoginUserPanel from "../../components/panels/login-user";
import QQGroupPanel from "../../components/panels/qq-group";
import "./index.less";
import Topic from "./topic";

const types = [
  { type: "all", title: "全部" },
  { type: "good", title: "精华" },
  { type: "new", title: "最新" },
  { type: "cold", title: "冷门" },
  { type: "job", title: "招聘" }
];

interface IndexProps {
  type?: string;
  topics?: any[];
  page?: number;
  pageSize?: number;
  total?: number;
}

const Index: BasePage<IndexProps> = {
  async prefetch() {
    return { topics: [], type: "all", page: 1, pageSize: 10, total: 0 };
  },
  page(props) {
    const { page = 1, pageSize = 10, total = 0 } = props;
    const [topics, setTopics] = useState(props.topics || []);
    const [type, setType] = useState(props.type || "all");
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
                    onClick={() => setType(item.type)}
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
              <Topic topic={topic} key={topic.id} />
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
