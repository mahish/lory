import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import { main, module } from './package.json'

const config = {
    input: 'src/lory.js',
    plugins: [
        nodeResolve(),
        babel(),
        commonjs(),
    ],
    output: [
        {
            file: main,
            format: 'umd',
            name: 'Zooming'
        }, {
            file: module,
            format: 'es'
        }
    ]
}

export default config
