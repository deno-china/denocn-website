import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Markdown from "../../components/markdown";
import content from "./about.md.txt";
import "./index.less";

export default function About() {
  return (
    <DefaultLayout>
      <Markdown>{content}</Markdown>
    </DefaultLayout>
  );
}
