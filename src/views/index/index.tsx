import React, { Component } from "react";
import DefaultLayout from "../../components/layouts/default";
import "./index.less";

export default class Home extends Component {
  render() {
    return (
      <DefaultLayout>
        <div className="page-index">
          <div className="panel topics">
            <div className="header">
              <a href="/">活跃</a>
              <a href="/?type=good">精华</a>
              <a href="/?type=new">最新</a>
              <a href="/?type=noreply">零回复</a>
              <a href="/?type=job">招聘</a>
            </div>
            <div className="body">
              <div className="list">
                <a href="#">
                  <img
                    src="https://iocaffcdn.phphub.org/uploads/avatars/1_1530614766.png!/both/100x100"
                    alt=""
                  />
                  <i>置顶</i>
                  <h2>Deno中文社区快要跟大家见面了，敬请期待大家使用</h2>
                  <div className="counters">
                    <span className="view">12</span>
                    <span className="reply">/ 13k /</span>
                    <span className="time">1小时前</span>
                  </div>
                </a>
                <a href="#">
                  <img
                    src="https://iocaffcdn.phphub.org/uploads/avatars/1_1530614766.png!/both/100x100"
                    alt=""
                  />
                  <i>置顶</i>
                  <h2>
                    Deno社区后端技术栈全部由Deno实现，是目前第一个完整的包含前后端线上项目
                  </h2>
                  <div className="counters">
                    <span className="view">12</span>
                    <span className="reply">/ 13k /</span>
                    <span className="time">1小时前</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
