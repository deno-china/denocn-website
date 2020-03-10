import React from "react";
import { BasePage } from "../../common/base-page";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./index.less";

const Index: BasePage = {
  async prefetch() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { content: "Test Prefetch Data" };
  },
  page(props: { content: string }) {
    const { content } = props;
    return <DefaultLayout>{content}</DefaultLayout>;
  }
};

export default Index;
