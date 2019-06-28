import React from 'react';
import DefaultLayout from '../../components/layouts/default';
import './index.less';

export default class About extends DefaultLayout {
    renderContent(): JSX.Element {
        return <div>About</div>;
    }

    renderSide(): JSX.Element {
        return null;
    }
}
