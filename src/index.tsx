import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom';
import { finishRender } from './common/seo';
import './index.less';
import { ViewsRouter } from './routes';

moment.locale('zh-cn');

ReactDOM.render(<ViewsRouter />, document.getElementById('app'));

setTimeout(() => {
  finishRender();
}, 2000);
