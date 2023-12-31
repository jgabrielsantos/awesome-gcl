import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import cjs from '@rollup/plugin-commonjs'
import dts from "rollup-plugin-dts";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import cssOnly from 'rollup-plugin-css-only'
import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: "src/index.ts",
    external: [
      /\.css$/
    ],
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternalPlugin(),
      resolve({
        browser: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      cssOnly(),
      cjs()
    ],
  },
  {
    input: 'tailwind.config.js',
    output: [
      {
        file: 'dist/tailwind.config.js',
        format: 'esm'
      }
    ]
  },
  {
    input: "dist/types/src/index.d.ts",
    external: [
      /\.css$/
    ],
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts()
    ],
  },
];
