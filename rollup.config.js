import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/entry/wrapper.js",
  output: {
    file: "dist/server.js",
    format: "esm",
    intro: "let parcelRequire;",
    strict: true
  },
  plugins: [commonjs(), resolve()]
};
