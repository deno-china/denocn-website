import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { httpGet, httpPost } from '../../common/request';
import { Message } from '../../components/antd';
import DefaultLayout from '../../components/layouts/default';
import TopicEditor from '../../components/topic-editor';
import { TopicModel } from '../../models/topic';
import './$id.less';

interface EditTopicState {
  topic: TopicModel;
}

class Publish extends DefaultLayout<
  RouteComponentProps<{ id: string }>,
  EditTopicState
> {
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
    return null;
  }

  async onSave({ title, content, type }) {
    const { id } = await httpPost('/api/topic/edit', {
      id: this.state.topic.id,
      content,
      title,
      type,
    });

    if (id) {
      Message.success('修改成功');
      this.props.history.push(`/detail/${id}`);
    }
  }
}

export default withRouter(Publish);
