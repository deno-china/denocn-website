import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { useToasts } from "react-toast-notifications";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import TopicEditor from "../../components/topic-editor";
import Topic from "../../model/topic";

export default function Publish() {
  const history = useHistory();
  const toast = useToasts();

  const onSave = useCallback(async params => {
    const { msg, success, data } = await fetch("/api/topic/add", {
      body: JSON.stringify(params),
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());

    if (success) {
      toast.addToast("发表成功", {
        appearance: "success",
        autoDismiss: true
      });
      const topic = data as Topic;
      history.push(`/detail/${topic._id.$oid}`);
    } else {
      toast.addToast(msg, { appearance: "error", autoDismiss: true });
    }
  }, []);

  return (
    <DefaultLayout>
      <TopicEditor editorTitle="发表主题" onSave={onSave} />
    </DefaultLayout>
  );
}
