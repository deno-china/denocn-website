import { IConfig } from 'umi-types';

const targetHost = 'http://localhost:3000';
// const targetHost = 'http://api.denocn.org:3000';

// ref: https://umijs.org/config/
const config: IConfig = {
  disableCSSModules: true, // 禁用 css modules
  proxy: {
    '/api': {
      target: targetHost,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  // uglify.js 配置
  // 去掉 console debugger
  uglifyJSOptions: {
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
      },
    },
  },
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/PageLoading/index',
        },
        title: 'Deno中文社区',
        dll: false,

        routes: {
          exclude: [/components\//, /models\//, /store/],
        },
      },
    ],
  ],
};

// @ts-ignore
export default config;
