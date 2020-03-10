import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Markdown from "../../components/markdown";
import content from "./getting-start.md.txt";

export default function GettingStart() {
  return (
    <DefaultLayout>
      <Markdown>{content}</Markdown>
    </DefaultLayout>
  );
}
