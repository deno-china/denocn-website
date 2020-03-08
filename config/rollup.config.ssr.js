import config from "./rollup.config.base";
export default config({
  input: "./src/entry/server.js",
  ssr: true,
  dev: true,
  format: "esm",
  outputFile: "public/ssr.js"
});
