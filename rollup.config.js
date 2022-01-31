import babel from '@rollup/plugin-babel';


export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/tool-provider.js',
            format: 'iife',
            exports: 'default',
            name: 'toolProvider'
        },
        {
            file: 'dist/tool-provider.cjs.js',
            exports: 'default',
            format: 'cjs'
        },
        {
            file: 'dist/tool-provider.esm.js',
            exports: 'named',
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
            babelHelpers: 'bundled',
            comments: false
        })
    ]
};
