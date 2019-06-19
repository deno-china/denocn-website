import "easymde/dist/easymde.min.css";
import React from "react";
import { RouteComponentProps, Router, withRouter } from "react-router";
import SimpleMDE from "react-simplemde-editor";
import { httpPost } from "../../common/request";
import DefaultLayout from "../../components/layouts/default";
import BasePanel from "../../components/panels/base-panel";
import "./index.less";

const editorOptions = {
  spellChecker: false,
  renderingConfig: {
    singleLineBreaks: false,
    codeSyntaxHighlighting: true
  },
  promptURLs: true,
  promptTexts: {
    image: "输入URL地址",
    link: "输入链接地址"
  },
  toolbar: [
    "bold",
    "italic",
    "strikethrough",
    "heading",
    "code",
    "quote",
    "unordered-list",
    "ordered-list",
    "clean-block",
    "link",
    "image",
    "table",
    "horizontal-rule",
    "|",
    "preview",
    "side-by-side",
    "fullscreen"
  ]
};

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

  handleChange(value: string) {
    console.log(value);
    this.setState({ content: value });
  }

  componentDidMount() {
    document.addEventListener("paste", function(event) {
      if (event.clipboardData) {
        var clipboardData = event.clipboardData;
        if (clipboardData.items) {
          var blob;
          for (var i = 0; i < clipboardData.items.length; i++) {
            if (clipboardData.items[i].type.indexOf("image") !== -1) {
              blob = clipboardData.items[i].getAsFile();
              break;
            }
          }
          if (blob) {
            var reader = new FileReader();
            reader.onload = function(evt) {
              var base64 = evt.target["result"];
              console.log(base64);
              document.getElementById("img").setAttribute("src", base64);
              // TODO: 上传图片
            };
            reader.readAsDataURL(blob);
          }
        }
      }
    });
  }

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

        <SimpleMDE
          value={this.state.content}
          onChange={this.handleChange.bind(this)}
          options={editorOptions}
        />
      </BasePanel>
    );
  }
  renderSide(): JSX.Element {
    return null;
  }
}

export default withRouter(Publish);
