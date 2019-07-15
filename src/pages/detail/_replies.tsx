import { faComments, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import Link from 'umi/link';
import MarkdownPreview from '../../components/markdown-preview';
import BasePanel from '../../components/panels/base-panel';
import { ReplyDetail } from '../../store/detail';
import './_replies.less';
import replyStore from '../../store/reply';
import { getRealConent, getUserName } from '../../common/utils';

const MAX_WIDTH = 1000;
const SIDE_HEIGHT = 1300;

interface RepliesPanelProps {
  replies: ReplyDetail[];
}


const RepliesPanel: FunctionComponent<RepliesPanelProps> = ({ replies }) => {
  if (!replies || !replies.length) return null;

  const flagMap: any = {};
  replies.forEach((item: ReplyDetail) => {
    const key = `@${getUserName(item)}`;
    flagMap[key] = `/user/${item.author_id}`;
  });

  function handleClick(item: ReplyDetail) {
    const { content } = replyStore;
    const flag = `@${item.author_nick_name || item.author_id}`;
    // 判断是否添加
    if (!content.includes(flag)) {
      replyStore.setContent(`${content}${content ? '\n' : ''}${flag} `);
    }
    let scrollDistance: number = document.body.clientHeight;
    if (document.body.clientWidth < MAX_WIDTH) {
      scrollDistance -= SIDE_HEIGHT;
    }
    // 滚动到页面底部
    window.scrollTo(0, scrollDistance);
  }

  return (
    <BasePanel
      white
      className="panel-detail-replies"
      header={(
        <div>
          <FontAwesomeIcon icon={faComments} style={{ marginRight: 10 }} />
          共有
          {' '}
          {replies.length}
          {' '}
          条回复
        </div>
      )}
    >
      <ul>
        {replies.map((reply, index) => (
          <li key={reply.id}>
            <Link to={`/user/${reply.author_id}`}>
              <img
                className="avatar"
                src={reply.author_avatar}
                alt={reply.author_nick_name}
              />
            </Link>
            <div className="right">
              <div className="author">
                <Link to={`/user/${reply.author_id}`}>
                  <span className="name">{getUserName(reply)}</span>
                </Link>
                <span className="floor">
                  {index + 1}
                  楼
                </span>
                <span className="time">{reply.created_at}</span>
                <div className="reply" onClick={() => handleClick(reply)} role="button">
                  <FontAwesomeIcon icon={faReply} />
                </div>
              </div>
              <MarkdownPreview content={getRealConent(reply.content, flagMap)} />
            </div>
          </li>
        ))}
      </ul>
    </BasePanel>
  );
};

export default RepliesPanel;
