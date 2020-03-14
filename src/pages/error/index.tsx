import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { BasePage } from "../../common/base-page";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./index.less";

interface ErrorPageProps {
  error?: string;
  title?: string;
}

const ErrorPage: BasePage = {
  page: (props: ErrorPageProps) => {
    const { title = "发生错误", error = "" } = props;
    return (
      <DefaultLayout className="page-error">
        <img src={logo} alt="" className="logo" />
        <div className="help-wanted">(征求一幅正在哭泣的Logo图片)</div>
        <div className="title">{title}</div>
        <div className="error">{error}</div>
      </DefaultLayout>
    );
  }
};

export default ErrorPage;
