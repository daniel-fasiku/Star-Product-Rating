import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";
const packageJson = require('./package.json')

export default [
    {
        input: "src/index.js",
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            resolve({
                extensions: [".js", ".jsx", ".ts", ".tsx"] 
            }),
            commonjs(),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"]
            }),
            terser(),
            postcss(),
            typescript({tsconfig: "./tsconfig.json", declaration: true, declarationDir: "dist/types"})
        ],
        external: ["react", "react-dom"]
    },
    {
        input: "src/index.js",
        output: [{file: packageJson.types}],
        plugins: [dts.default()],
    }
]