import {
  faCheck,
  faCommentDots,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useCallback, useState } from "react";
import { httpPost } from "../../common/request";
import Editor from "../../components/editor";
import BasePanel from "../../components/panels/base-panel";
import "./_add-reply.less";
import detailStore from "../../store/detail";

interface AddReplyProps {
  topicId: number;
  replyTo?: number;
}

const AddReply: FunctionComponent<AddReplyProps> = ({ topicId, replyTo }) => {
  const [content, setContent] = useState("");
  const onCommit = useCallback(async () => {
    await httpPost("/api/reply/add", {
      content,
      topic_id: topicId,
      reply_to: replyTo
    });
    setContent("");
    detailStore.load(topicId);
  }, [content]);
  return (
    <BasePanel
      white
      className="panel-detail-add-reply"
      header={
        <>
          <div>
            <FontAwesomeIcon icon={faCommentDots} style={{ marginRight: 10 }} />
            发表回复
          </div>
          <button className="btn green" onClick={onCommit}>
            <FontAwesomeIcon icon={faCheck} style={{ marginRight: 10 }} />
            提交
          </button>
        </>
      }
    >
      <div className="tips">
        <FontAwesomeIcon icon={faInfoCircle} />
        可以粘贴上传图片
      </div>

      <Editor value={content} onChange={setContent} />
    </BasePanel>
  );
};

export default AddReply;
