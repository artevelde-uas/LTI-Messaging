import babel from 'rollup-plugin-babel';


export default {
    input: 'src/tool-provider.js',
    output: {
        file: 'dist/tool-provider.js',
        format: 'iife',
        name: 'toolProvider'
    },
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ["env", { modules: false }]
            ],
            comments: false
        })
    ]
};
