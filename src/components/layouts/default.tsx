import React, { Component } from 'react';
import Footer from '../footer';
import Header from '../header';
import './default.less';
import { setDocumentTitle } from '../../common/utils';

abstract class DefaultLayout<P = any, S = any> extends Component<P, S> {
  componentDidMount(): void {
    setDocumentTitle('');
  }

  abstract renderContent(): JSX.Element;

  abstract renderSide(): JSX.Element;

  render() {
    const sides = this.renderSide();
    return (
      <div className="layout-default">
        <Header />
        <div id="main-wrapper">
          <div className="content">{this.renderContent()}</div>
          {sides && <div className="side">{sides}</div>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;
