import React from 'react';
import { message } from 'antd';
import { httpPost } from '../../common/request';
import DefaultLayout from '../../components/layouts/default';
import TopicEditor from '../../components/topic-editor';
import './index.less';

class Publish extends DefaultLayout<any> {
  renderContent(): JSX.Element {
    return <TopicEditor title="发表主题" onSave={this.onSave.bind(this)} />;
  }

  renderSide(): JSX.Element {
    // @ts-ignore
    return null;
  }

  async onSave({
    title,
    content,
    type,
  }: {
    title: string;
    content: string;
    type: string;
  }) {
    const { id } = await httpPost('/api/topic/add', {
      content,
      title,
      type,
    });

    if (id) {
      message.success('发表成功');
      this.props.history.push(`/detail/${id}`);
    }
  }
}

export default Publish;
