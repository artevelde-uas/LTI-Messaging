import babel from '@rollup/plugin-babel';


export default {
    input: 'src/tool-provider.js',
    output: [
        {
            file: 'dist/tool-provider.js',
            format: 'iife',
            name: 'toolProvider'
        },
        {
            file: 'dist/tool-provider.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/tool-provider.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env', {
                    modules: false
                }]
            ],
            comments: false
        })
    ]
};
