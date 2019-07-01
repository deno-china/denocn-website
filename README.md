# Deno 中文社区前端部分

[![Build Status](https://www.travis-ci.org/deno-china/website-fe.svg?branch=master)](https://www.travis-ci.org/deno-china/website-fe)
![GitHub](https://img.shields.io/github/license/deno-china/website-fe.svg)
[![Website](https://img.shields.io/website/https/denocn.org.svg?up_message=startup)](https://denocn.org)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/deno-china/website-fe/master.svg)
![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/deno-china/website-fe.svg)
![GitHub top language](https://img.shields.io/github/languages/top/deno-china/website-fe.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/deno-china/website-fe.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/deno-china/website-fe/pull/new)

## 安装

```bash
npm install
```

## 运行

```bash
npm run dev
```

浏览器输入 [http://localhost:1234](http://localhost:1234)。

## 使用线上地址开发

### 1. 更改电脑 **hosts**

#### Mac 更改 **hosts**

```bash
sudo vim  /private/etc/hosts # 需要管理员权限
```

```
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
127.0.0.1	denocn.org # 增加此行配置
```

**更改 hosts 后，重启才能生效！**

#### Windows 更改 **hosts**

```
# 需要管理员权限
# win10 hosts 文件位置
C:\Windows\System32\drivers\etc\hosts
```

更改 **hosts** 后，将导致 [https://denocn.org](https://denocn.org)无法访问。
开发完成后，使用 **#** 注释掉添加的配置即可。

### 2. 修改 [dev.js](dev.js)

更改为如下配置：

```js
// ... 其他不变
// 请求地址设置为线上地址
const targetHost = 'http://api.denocn.org:3000';

const server = new ParcelProxyServer({
  entryPoint: './src/index.html',
  parcelOptions: {},
  proxies: {
    '/api': {
      target: targetHost,
    },
    '/seo': {
      target: targetHost,
    },
  },
});
// ... 其他不变
```

## 持续集成

前端部分通过 **Travis** 、 **Docker**  持续部署。通过 Nginx 实现单页以及 api 代理。

`master` build通过自动部署到线上环境。请各位Contributor做好review工作。

## API 列表

列表中所有 API 需要加上 `/api/` 前缀实现代理

https://github.com/deno-china/website/issues/9
