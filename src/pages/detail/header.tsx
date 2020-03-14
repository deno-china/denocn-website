import {
  faClock,
  faCommentDots,
  faEdit,
  faEye,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../common/data-provider/user";
import { formatDate } from "../../common/format";
import Topic from "../../model/topic";

interface DetailHeaderProps {
  topic: Topic;
  onDelete?(): void;
}

export default function DetailHeader(props: DetailHeaderProps) {
  const { topic, onDelete } = props;
  const [user] = useUserData();

  return (
    <>
      <h2>
        <span className="type">{topic.type}</span>
        {topic.title}
      </h2>
      <div>
        {topic.is_top && (
          <i className="tag" style={{ background: "#fbbd08" }}>
            置顶
          </i>
        )}
        {topic.is_good && <i className="tag">精华</i>}
        <span className="time">
          <FontAwesomeIcon icon={faClock} color="#bbb" />
          发布于 {formatDate(topic.created_at)}
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faCommentDots} />
          {topic.reply_count}
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faEye} />
          {topic.view_count}
        </span>
      </div>
      {user?._id.$oid === topic.author?._id.$oid && (
        <div className="ops">
          <Link to={`/edit/${topic._id.$oid}`}>
            <button className="edit">
              <FontAwesomeIcon icon={faEdit} />
              编辑
            </button>
          </Link>
          <button className="del" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
            删除
          </button>
        </div>
      )}
    </>
  );
}
