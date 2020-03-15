import {
  faClock,
  faCommentDots,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { formatFromNow } from "../../common/format";
import Topic from "../../model/topic";

interface TopicItemProps {
  topic: Topic;
}

export default function Topic(props: TopicItemProps) {
  const { topic } = props;
  return (
    <li>
      <Link to={`/user/${topic.author?._id.$oid}`}>
        <img className="avatar" src={topic.author?.avatar} alt="" />
      </Link>
      <div className="right">
        <div>
          <span className="type">{topic.type}</span>
          <Link to={`/detail/${topic._id.$oid}`}>
            <h2>{topic.title}</h2>
          </Link>
        </div>
        <div className="info">
          {topic.is_top && (
            <i className="tag" style={{ backgroundColor: "#fbbd08" }}>
              置顶
            </i>
          )}
          {topic.is_good && <i className="tag">精华</i>}
          {topic.last_reply_id ? (
            <>
              <Link className="author" to={`/user/todo`}>
                {/* {topic.reply_user_name} */}
              </Link>
              <FontAwesomeIcon icon={faClock} color="#bbb" />
              <span className="time">
                回复于
                {topic.last_reply_time}
              </span>
            </>
          ) : (
            <>
              <Link className="author" to={`/user/${topic.author_id.$oid}`}>
                {topic.author?.nick_name}
              </Link>
              <FontAwesomeIcon icon={faClock} color="#bbb" />
              <span className="time">
                发布于
                {formatFromNow(topic.created_at)}
              </span>
            </>
          )}
          <span className="icon">
            <FontAwesomeIcon icon={faCommentDots} />
            {topic.reply_count}
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faEye} />
            {topic.view_count}
          </span>
        </div>
      </div>
    </li>
  );
}
