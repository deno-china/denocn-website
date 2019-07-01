import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import MarkdownPreview from '../../components/markdown-preview';
import BasePanel from '../../components/panels/base-panel';
import { ReplyDetail } from '../../store/detail';
import './_replies.less';

interface RepliesPanelProps {
  replies: ReplyDetail[];
}

const RepliesPanel: FunctionComponent<RepliesPanelProps> = ({ replies }) => {
  if (!replies || !replies.length) return null;
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
                  <span className="name">{reply.author_nick_name}</span>
                </Link>
                <span className="floor">
                  {index + 1}
                  楼
                </span>
                <span className="time">{reply.created_at}</span>
              </div>
              <MarkdownPreview content={reply.content} />
            </div>
          </li>
        ))}
      </ul>
    </BasePanel>
  );
};

export default RepliesPanel;
