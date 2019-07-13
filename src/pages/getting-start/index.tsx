import React from 'react';
import DefaultLayout from '../../components/layouts/default';
import './index.less';
import { setDocumentTitle } from '../../common/utils';

export default class GettingStart extends DefaultLayout {
  componentDidMount(): void {
    setDocumentTitle('新手入门');
  }

  renderContent(): JSX.Element {
    return <div>Getting Start</div>;
  }

  renderSide(): JSX.Element {
    // @ts-ignore
    return null;
  }
}
