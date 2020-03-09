import config from "./rollup.config.base";
export default config({
  input: "./src/entry/server.js",
  ssr: true,
  dev: false,
  format: "esm",
  sourcemap: false,
  outputFile: "public/ssr.js"
});
