import {
  faCheck,
  faCommentDots,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { message, Spin } from 'antd';
import { httpPost } from '../../common/request';
import Editor from '../../components/editor';
import BasePanel from '../../components/panels/base-panel';
import './_add-reply.less';
import replyStore from '../../store/reply';
import detailStore from '../../store/detail';

interface AddReplyProps {
  topicId: number;
  replyTo?: number;
}

interface AddReplyState {
  loading: boolean;
}

@observer
class AddReply extends Component<AddReplyProps, AddReplyState> {
  state = {
    loading: false,
  };

  handleClick = () => {
    const { topicId, replyTo } = this.props;
    const { content } = replyStore;
    if (!content.trim().length) {
      message.error('请输入内容');
      return;
    }
    this.setState({
      loading: true,
    });
    httpPost('/api/reply/add', {
      content,
      topic_id: topicId,
      reply_to: replyTo,
    }).then(() => {
      this.setState({
        loading: false,
      });
      replyStore.setContent('');
      detailStore.load(topicId);
    }).finally(() => {
      this.setState({
        loading: false,
      });
    });
  };

  handleChange = (value: string) => {
    replyStore.setContent(value);
  };

  render() {
    const { loading } = this.state;
    const { content } = replyStore;
    return (
      <Spin spinning={loading}>
        <BasePanel
          white
          className="panel-detail-add-reply"
          header={(
            <>
              <div>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ marginRight: 10 }}
                />
                发表回复
              </div>
              <button className="btn green" onClick={this.handleClick}>
                <FontAwesomeIcon icon={faCheck} style={{ marginRight: 10 }} />
                提交
              </button>
            </>
          )}
        >
          <div className="tips">
            <FontAwesomeIcon icon={faInfoCircle} />
            可以粘贴上传图片
          </div>

          <Editor value={content} onChange={this.handleChange} />
        </BasePanel>
      </Spin>
    );
  }
}

export default AddReply;
