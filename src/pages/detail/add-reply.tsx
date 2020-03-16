import {
  faCheck,
  faCommentDots,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "antd/es/button";
import message from "antd/es/message";
import Spin from "antd/es/spin";
import React, { useCallback, useState } from "react";
import BasePanel from "../../components/base-panel";
import dynamicLoad from "../../components/dynamic-page";
import "./add-reply.less";

interface AddReplyProps {
  topicId: string;
  replyTo?: string;
  onAddReply?(): void;
}

const Editor = dynamicLoad(() => import("../../components/editor"));

export default function AddReply(props: AddReplyProps) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const onSave = useCallback(async () => {
    if (!content.trim().length) {
      message.error("请输入内容");
      return;
    }
    setLoading(true);
    try {
      const { success, msg, data } = await fetch(`/api/reply/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          topic_id: props.topicId,
          reply_to: props.replyTo
        })
      }).then(res => res.json());
      if (success) {
        message.success("评论成功");
        setContent("");
        props.onAddReply && props.onAddReply();
      } else {
        message.error(msg);
      }
    } finally {
      setLoading(false);
    }
  }, [content]);

  return (
    <Spin spinning={loading}>
      <BasePanel
        style="white"
        className="panel-detail-add-reply"
        header={
          <>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ marginRight: 10 }}
              />
              发表回复
            </div>
            <Button className="btn green" onClick={onSave}>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: 10 }} />
              提交
            </Button>
          </>
        }
      >
        <Editor value={content} onChange={setContent} />
      </BasePanel>
    </Spin>
  );
}
