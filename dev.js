const ParcelProxyServer = require("parcel-proxy-server");

const targetHost = "http://127.0.0.1:3000";

const server = new ParcelProxyServer({
  entryPoint: "./src/index.html",
  parcelOptions: {},
  proxies: {
    "/api": {
      target: targetHost,
      pathRewrite: {
        "^/api": "/"
      }
    },
    "/seo": {
      target: targetHost
    }
  }
});

server.listen(1234, () => {
  console.log("Parcel proxy server has started");
});
