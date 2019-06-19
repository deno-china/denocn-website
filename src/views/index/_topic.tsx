import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { TopicListItem } from "../../store/topic";

interface TopicItemProps {
  topic: TopicListItem;
}

const Topic: FunctionComponent<TopicItemProps> = props => {
  return (
    <li>
      <Link to={`/user/${props.topic.author_id}`}>
        <img className="avatar" src={props.topic.user_avatar} alt="" />
      </Link>
      <div className="right">
        <div>
          <span className="type">{props.topic.type}</span>
          <Link to={`/detail/${props.topic.id}`}>
            <h2>{props.topic.title}</h2>
          </Link>
        </div>
        <div className="info">
          {props.topic.is_top && (
            <i className="tag" style={{ backgroundColor: "#fbbd08" }}>
              置顶
            </i>
          )}
          {props.topic.is_good && <i className="tag">精华</i>}
          {props.topic.last_reply_id ? (
            <>
              <Link
                className="author"
                to={`/user/${props.topic.reply_user_id}`}
              >
                {props.topic.reply_user_name}
              </Link>
              <span className="time">回复于 {props.topic.reply_time}</span>
              <span className="view">
                • {props.topic.reply_count}回复 • {props.topic.view_count}查看
              </span>
            </>
          ) : (
            <>
              <Link className="author" to={`/user/${props.topic.author_id}`}>
                {props.topic.user_nick_name}
              </Link>
              <span className="time">发布于 {props.topic.created_at}</span>
              <span className="view">
                • {props.topic.reply_count}回复 • {props.topic.view_count}查看
              </span>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default Topic;
