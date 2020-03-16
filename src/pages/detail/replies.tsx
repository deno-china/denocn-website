import { faComments, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { formatFromNow } from "../../common/format";
import BasePanel from "../../components/base-panel";
import Markdown from "../../components/markdown";
import Reply from "../../model/reply";
import "./replies.less";

const MAX_WIDTH = 1000;
const SIDE_HEIGHT = 1300;
const flagMap: any = {};

// 解决用户名可能为空的问题
export function getUserName(item: Reply): string {
  return `${item.author?.nick_name || item.author_id.$oid}`;
}

// 回复的用户名转换为链接
export function getRealConent(content: string, flagMap: any): string {
  return content.replace(/@\S+/g, (key: string): string => {
    const link = flagMap[key];
    if (link) {
      return `[${key}](${link})`;
    }
    return key;
  });
}

interface RepliesPanelProps {
  replies: Reply[];
}

export default function RepliesPanel(props: RepliesPanelProps) {
  const { replies } = props;
  if (!replies || !replies.length) return null;

  replies.forEach((item: Reply) => {
    const key = `@${getUserName(item)}`;
    flagMap[key] = `/user/${item.author_id}`;
  });

  const onReplySomebody = (item: Reply) => {
    const flag = `@${item.author?.nick_name || item.author_id}`;
    let scrollDistance: number = document.body.clientHeight;
    if (document.body.clientWidth < MAX_WIDTH) {
      scrollDistance -= SIDE_HEIGHT;
    }
    // 滚动到页面底部
    window.scrollTo(0, scrollDistance);
  };

  return (
    <BasePanel
      style="white"
      className="panel-detail-replies"
      header={
        <div>
          <FontAwesomeIcon icon={faComments} style={{ marginRight: 10 }} />
          共有 {replies.length} 条回复
        </div>
      }
    >
      <ul>
        {replies.map((reply, index) => (
          <li key={reply._id.$oid}>
            <Link to={`/user/${reply.author_id.$oid}`}>
              <img
                className="avatar"
                src={reply.author?.avatar}
                alt={reply.author?.nick_name}
              />
            </Link>
            <div className="right">
              <div className="author">
                <Link to={`/user/${reply.author_id.$oid}`}>
                  <span className="name">{getUserName(reply)}</span>
                </Link>
                <span className="floor">{index + 1}楼</span>
                <span className="time">{formatFromNow(reply.created_at)}</span>
                <div
                  className="reply"
                  onClick={() => onReplySomebody(reply)}
                  role="button"
                >
                  <FontAwesomeIcon icon={faReply} />
                </div>
              </div>
              <Markdown>{getRealConent(reply.content, flagMap)}</Markdown>
            </div>
          </li>
        ))}
      </ul>
    </BasePanel>
  );
}
