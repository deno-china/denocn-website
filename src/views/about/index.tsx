import React from 'react';
import DefaultLayout from '../../components/layouts/default';
import './index.less';
import MarkdownPreview from '../../components/markdown-preview';

export default class About extends DefaultLayout {
  componentWillMount() {
    fetch('http://127.0.0.1:1234/about.md').then(res => res.text()).then(text => this.setState({ content: text }));
  }

  state = { content: '' };

  renderContent(): JSX.Element {
    return <MarkdownPreview content={this.state.content} />;
  }

  renderSide(): JSX.Element {
    return null;
  }
}
