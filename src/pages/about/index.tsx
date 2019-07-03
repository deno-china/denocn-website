import React from 'react';
import DefaultLayout from '../../components/layouts/default';
import MarkdownPreview from '../../components/markdown-preview';
import './index.less';

export default class About extends DefaultLayout {
  componentWillMount() {
    fetch('/about.md')
      .then(res => res.text())
      .then(text => this.setState({ content: text }));
  }

  state = { content: '' };

  renderContent(): JSX.Element {
    return <MarkdownPreview content={this.state.content} />;
  }

  renderSide(): JSX.Element {
    return null;
  }
}
