import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { httpPost } from '../../common/request';
import { Message } from '../../components/antd';
import DefaultLayout from '../../components/layouts/default';
import TopicEditor from '../../components/topic-editor';
import './index.less';

class Publish extends DefaultLayout<RouteComponentProps> {
    renderContent(): JSX.Element {
        return <TopicEditor title="发表主题" onSave={this.onSave.bind(this)} />;
    }

    renderSide(): JSX.Element {
        return null;
    }

    async onSave({ title, content, type }) {
        const { id } = await httpPost('/api/topic/add', {
            content,
            title,
            type,
        });

        if (id) {
            Message.success('发表成功');
            this.props.history.push(`/detail/${id}`);
        }
    }
}

export default withRouter(Publish);
