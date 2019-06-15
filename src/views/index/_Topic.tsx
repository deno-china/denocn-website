import React, { FunctionComponent } from "react";

const Topic: FunctionComponent = props => {
  return (
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
  );
};

export default Topic;
