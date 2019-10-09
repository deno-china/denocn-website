# Deno 中文社区前端部分

[![Build Status](https://github.com/deno-china/website-fe/workflows/CI/badge.svg)](https://github.com/deno-china/website-fe/actions)
![GitHub](https://img.shields.io/github/license/deno-china/website-fe.svg)
[![Website](https://img.shields.io/website/https/denocn.org.svg?up_message=startup)](https://denocn.org)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/deno-china/website-fe/master.svg)
![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/deno-china/website-fe.svg)
![GitHub top language](https://img.shields.io/github/languages/top/deno-china/website-fe.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/deno-china/website-fe.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/deno-china/website-fe/pull/new)

## 安装

```bash
$ npm install
```

## 运行

```bash
$ npm run dev
```

浏览器输入 [http://localhost:8000](http://localhost:8000) 查看效果。

## 打包

```bash
$ npm run build
```

## 分析依赖包

```bash
$ npm run analyze
```

## 持续集成

前端部分通过 **Travis** 、 **Docker** 持续部署。通过 Nginx 实现单页以及 api 代理。

`master` build 通过自动部署到线上环境。请各位 Contributor 做好 review 工作。

## API 列表

列表中所有 API 需要加上 `/api/` 前缀实现代理

https://github.com/deno-china/website/issues/9
