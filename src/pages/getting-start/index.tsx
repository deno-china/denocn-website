import React from "react";
import { BasePage } from "../../common/base-page";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Markdown from "../../components/markdown";
import content from "./getting-start.md.txt";
import { setPageMetadata } from "../../common/ssr-util";

const GettingStart: BasePage = {
  page: () => {
    setPageMetadata({ title: "新手入门 - Deno中文社区" });

    return (
      <DefaultLayout>
        <Markdown>{content}</Markdown>
      </DefaultLayout>
    );
  }
};

export default GettingStart;
