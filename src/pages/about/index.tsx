import React from "react";
import { BasePage } from "../../common/base-page";
import { setPageMetadata } from "../../common/ssr-util";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Markdown from "../../components/markdown";
import content from "./about.md.txt";
import "./index.less";

const About: BasePage = {
  page: () => {
    setPageMetadata({ title: "关于我们 - Deno中文社区" });
    return (
      <DefaultLayout>
        <Markdown>{content}</Markdown>
      </DefaultLayout>
    );
  }
};

export default About;
