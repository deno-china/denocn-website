import hljs from "highlight.js";
import marked from "marked";
import React, { useMemo } from "react";
import MarkdownContainer from "./Container";

const options: marked.MarkedOptions = {
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
};

interface MarkdownProps {
  content?: string;
  children?: string;
}

export default function Markdown(props: MarkdownProps) {
  const { content, children } = props;
  const html = useMemo(() => {
    const source = children || content || "";
    const markedHtml = marked(source, options);
    return markedHtml;
  }, [content, children]);

  return <MarkdownContainer>{html}</MarkdownContainer>;
}
