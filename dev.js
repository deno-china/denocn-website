const ParcelProxyServer = require("parcel-proxy-server");
const server = new ParcelProxyServer({
  entryPoint: "./src/index.html",
  parcelOptions: {},
  proxies: {
    "/api": {
      target: "http://127.0.0.1:3000",
      pathRewrite: {
        "^/api": "/"
      }
    }
  }
});

server.listen(1234, () => {
  console.log("Parcel proxy server has started");
});
