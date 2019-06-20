import "easymde/dist/easymde.min.css";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { httpPost } from "../../common/request";
import Editor from "../../components/editor";
import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/base-panel";
import "./index.less";

interface PublishState {
  content: string;
  title: string;
  type: string;
}

class Publish extends DefaultLayout<RouteComponentProps, PublishState> {
  state = {
    content: "",
    title: "",
    type: "分享"
  };

  async onSave() {
    if (!this.state.title || this.state.title.length < 10) {
      alert("标题至少10个字符");
      return;
    }
    if (!this.state.content || this.state.content.length < 20) {
      alert("内容至少20个字符");
      return;
    }

    // TODO: Loading
    const { id } = await httpPost("/api/topic/add", {
      content: this.state.content,
      title: this.state.title,
      type: this.state.type
    });

    if (id) {
      // TODO: 提示框
      this.props.history.push("/detail/" + id);
    }
  }

  renderContent(): JSX.Element {
    return (
      <BasePanel
        className="page-publish"
        white
        header={
          <>
            <h4>发布主题</h4>
            <button onClick={this.onSave.bind(this)}>提交</button>
          </>
        }
      >
        <div className="form">
          <select
            placeholder="请选择分类"
            value={this.state.type}
            onChange={({ target }) => this.setState({ type: target.value })}
          >
            <option value="问答">问答</option>
            <option value="分享">分享</option>
            <option value="招聘">招聘</option>
          </select>

          <input
            type="text"
            placeholder="请输入标题"
            value={this.state.title}
            onChange={({ target }) => this.setState({ title: target.value })}
          />
        </div>

        <Editor
          value={this.state.content}
          onChange={value => this.setState({ content: value })}
        />
      </BasePanel>
    );
  }
  renderSide(): JSX.Element {
    return null;
  }
}

export default withRouter(Publish);
