import React from "react";
import "./Container.less";
import "highlight.js/styles/github.css";

interface MarkdownContainerProps {
  children: string;
}

export default function MarkdownContainer(props: MarkdownContainerProps) {
  const { children } = props;
  const html = { __html: children };
  return <div className="markdown-container" dangerouslySetInnerHTML={html} />;
}
