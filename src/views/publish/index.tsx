import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/base-panel";
import React from "react";

export default class Publish extends DefaultLayout {
  renderContent(): JSX.Element {
    return <BasePanel white>发布</BasePanel>;
  }
  renderSide(): JSX.Element {
    return null;
  }
}
