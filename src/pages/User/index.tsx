import React from "react";
import { match } from "react-router";
import { BasePage } from "../../common/base-page";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./index.less";

const User: BasePage = {
  async prefetch(match: match<{ id: string }>) {
    const id = match.params.id;
    const { data } = await fetch(`/api/user/info/${id}`).then(res =>
      res.json()
    );
    console.log(data);
  },
  page() {
    return <DefaultLayout>User</DefaultLayout>;
  }
};

export default User;
