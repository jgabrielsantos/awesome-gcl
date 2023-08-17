import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import cssOnly from 'rollup-plugin-css-only'
import copy from 'rollup-plugin-copy'
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
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternalPlugin(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      cssOnly(),
      copy({
        targets: [
          {
            src: './src/styles/*.css',
            dest: [
              'dist/cjs/types/styles',
              'dist/cjs/styles',
              'dist/esm/types/styles',
              'dist/esm/styles',
            ]
          }
        ]
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    external: [
      /\.css$/
    ],
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts()
    ],
  },
];