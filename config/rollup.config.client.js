const production = !process.env.ROLLUP_WATCH;

import config from "./rollup.config.base";
export default config({
  input: "./src/entry/client.js",
  ssr: false,
  dev: !production,
  format: "iife",
  outputFile: "public/bundle.js"
});
