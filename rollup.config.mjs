import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS format
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "es", // ES module format
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs()],
  external: ["react", "react-dom"],
};
