import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'


export default [

    {
        input: [
            'element-1.js',
            'element-2.js',
            'element-3.js',
            'element-4.js'
        ],
        output: {
            dir: 'build',
            format: 'es',
            sourcemap: false
        },
        plugins: [
            serve({
                open: true,
                contentBase: '.',
                host: 'localhost',
                port: 3000,
            }),
            resolve({
                only: ['lit-element', 'lit-html' ]
            })
        ]
    }
];
