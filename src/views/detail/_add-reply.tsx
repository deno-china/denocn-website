import {
    faCheck,
    faCommentDots,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { httpPost } from '../../common/request';
import { Message, Spin } from '../../components/antd';
import Editor from '../../components/editor';
import BasePanel from '../../components/panels/base-panel';
import detailStore from '../../store/detail';
import './_add-reply.less';

interface AddReplyProps {
    topicId: number;
    replyTo?: number;
}

const AddReply: FunctionComponent<AddReplyProps> = ({ topicId, replyTo }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const onCommit = useCallback(async () => {
        if (!content.trim().length) {
            Message.error('请输入内容');
            return;
        }
        setLoading(true);
        try {
            await httpPost('/api/reply/add', {
                content,
                topic_id: topicId,
                reply_to: replyTo,
            });
        } finally {
            setLoading(false);
        }
        setContent('');
        detailStore.load(topicId);
    }, [content]);
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
                        <button className="btn green" onClick={onCommit}>
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

                <Editor value={content} onChange={setContent} />
            </BasePanel>
        </Spin>
    );
};

export default AddReply;
