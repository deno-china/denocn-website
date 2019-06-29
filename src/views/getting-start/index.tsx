import React from 'react';
import DefaultLayout from '../../components/layouts/default';
import './index.less';

export default class GettingStart extends DefaultLayout {
  renderContent(): JSX.Element {
    return <div>Getting Start</div>;
  }

  renderSide(): JSX.Element {
    return null;
  }
}
