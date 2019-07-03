import React from 'react';
import { message } from 'antd';
import { httpGet, httpPost } from '../../common/request';
import DefaultLayout from '../../components/layouts/default';
import TopicEditor from '../../components/topic-editor';
import { TopicModel } from '../../models/topic';
import './$id.less';

interface EditTopicState {
  topic: TopicModel;
}

class Publish extends DefaultLayout<any, EditTopicState> {
  state: EditTopicState = {
    topic: {},
  };

  async componentWillMount() {
    const { id } = this.props.match.params;
    const topic = await httpGet(`/api/topic/detail/${id}`);
    this.setState({ topic: topic as TopicModel });
  }

  renderContent(): JSX.Element {
    return (
      <TopicEditor
        title="修改主题"
        topic={this.state.topic}
        onSave={this.onSave.bind(this)}
      />
    );
  }

  renderSide(): JSX.Element {
    // @ts-ignore
    return null;
  }

  async onSave({ title, content, type }: { title: string; content: string; type: string }) {
    const { id } = await httpPost('/api/topic/edit', {
      id: this.state.topic.id,
      content,
      title,
      type,
    });

    if (id) {
      message.success('修改成功');
      this.props.history.push(`/detail/${id}`);
    }
  }
}

export default Publish;
