import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "antd/es/button";
import React, { useState } from "react";
import BasePanel from "../base-panel";
import Editor from "../editor";
import "./index.less";

interface TopicEditorProps {
  editorTitle: string;
  onSave(params: { title: string; content: string; type: string }): void;
}

export default function TopicEditor(props: TopicEditorProps) {
  const { editorTitle, onSave } = props;
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("分享");

  const onSaveClick = () => {
    onSave({
      title,
      type,
      content
    });
  };

  return (
    <BasePanel
      className="com-topic-editor"
      style="white"
      header={
        <>
          <h4>
            <FontAwesomeIcon className="icon" icon={faEdit} />
            {editorTitle}
          </h4>
          <Button type="primary" className="btn" onClick={onSaveClick}>
            提交
          </Button>
        </>
      }
    >
      <div className="form">
        <select
          placeholder="请选择分类"
          value={type}
          onChange={({ target }) => setType(target.value)}
        >
          <option value="问答">问答</option>
          <option value="分享">分享</option>
          <option value="招聘">招聘</option>
        </select>

        <input
          type="text"
          placeholder="请输入标题"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <Editor value={content} onChange={setContent} />
    </BasePanel>
  );
}
