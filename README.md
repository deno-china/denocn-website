# Deno 中文社区前端部分

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
const targetHost = 'http://api.denocn.org';

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

前端部分通过 **Netilfy** 持续部署。通过 redirects 实现单页以及 api 代理。

```toml
[build]
  base    = ""
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/api/*"
  to = "http://api.denocn.org/:splat"
  status = 200
  force = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## API 列表

列表中所有 API 需要加上 `/api/` 前缀实现代理

https://github.com/deno-china/website/issues/9
