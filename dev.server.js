const ParcelProxyServer = require("parcel-proxy-server");

const server = new ParcelProxyServer({
  entryPoint: "./src/index.html",
  parcelOptions: {
    outDir: "../public",
    watch: true,
    target: "browser",
    sourceMaps: true,
    hmr: true,
    open: true
  },
  proxies: {
    "/api": {
      target: "http://localhost:3000/"
    }
  }
});

server.bundler.on("buildEnd", () => {
  console.log("Build completed!");
});

server.listen(1234, () => {
  console.log("Parcel proxy server has started");
});
