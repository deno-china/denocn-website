import React from "react";
import { BasePage } from "../../common/base-page";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Markdown from "../../components/markdown";
import content from "./about.md.txt";
import "./index.less";

const About: BasePage = {
  page: () => {
    return (
      <DefaultLayout>
        <Markdown>{content}</Markdown>
      </DefaultLayout>
    );
  }
};

export default About;
