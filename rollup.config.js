import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import inject from "@rollup/plugin-inject";
import polyfillNode from "rollup-plugin-polyfill-node";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript(),
    json(),
    polyfillNode(), // Polyfill Node.js modules voor de browser
    inject({
      process: "process",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
