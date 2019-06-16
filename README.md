## Deno中文社区前端部分

前端部分通过 **Netilfy** 持续部署。通过redirects实现单页以及api代理。
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

### API列表
列表中所有API需要加上 `/api/` 前缀实现代理

https://github.com/deno-china/website/issues/9
