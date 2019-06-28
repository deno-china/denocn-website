import { observer } from 'mobx-react';
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import DefaultLayout from '../../components/layouts/default';
import Pagination from '../../components/pagination';
import BasePanel from '../../components/panels/base-panel';
import FriendsLinkPanel from '../../components/panels/friends-link';
import LoginUserPanel from '../../components/panels/login-user';
import QQGroupPanel from '../../components/panels/qq-group';
import topicStore from '../../store/topic';
import userStore from '../../store/user';
import './index.less';
import Topic from './_topic';
import { Link } from 'react-router-dom';

const types = [
    { type: 'all', title: '全部' },
    { type: 'good', title: '精华' },
    { type: 'new', title: '最新' },
    { type: 'cold', title: '冷门' },
    { type: 'job', title: '招聘' },
];

@observer
class Home extends DefaultLayout<RouteComponentProps> {
    componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);
        const type = params.get('type') || 'all';
        const page = params.get('page') || '1';
        topicStore.type = type;
        topicStore.page = parseInt(page);
        topicStore.load();
    }

    renderContent(): JSX.Element {
        return (
            <div className="page-index">
                <BasePanel white className="topics" header={this.renderHeader()}>
                    <ul className="list">
                        {topicStore.list.map(topic => (
                            <Topic topic={topic} key={topic.id} />
                        ))}
                    </ul>
                    <Pagination
                        page={topicStore.page}
                        total={topicStore.total}
                        size={topicStore.pageSize}
                        onChange={(page, size) => {
                            topicStore.page = page;
                            topicStore.pageSize = size;
                            this.props.history.replace(
                                `/?type=${topicStore.type}&page=${page}`,
                            );
                            topicStore.load();
                        }}
                    />
                </BasePanel>
            </div>
        );
    }

    renderSide(): JSX.Element {
        return (
            <>
                <LoginUserPanel user={userStore.info} />
                <FriendsLinkPanel />
                <QQGroupPanel />
            </>
        );
    }

    renderHeader() {
        return (
            <div className="header">
                {types.map(type => (
                    <Link key={type.type} replace to={`/?type=${type.type}`}>
                        <span
                            className={type.type === topicStore.type ? 'active' : ''}
                            onClick={() => topicStore.changeType(type.type as any)}
                        >
                            {type.title}
                        </span>
                    </Link>
                ))}
            </div>
        );
    }
}

export default withRouter(Home);
