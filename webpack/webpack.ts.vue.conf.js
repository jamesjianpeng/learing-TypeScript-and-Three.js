/**
 * @file 只构建 TypeScript and Vue
 * @author jamesjianpeng
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'none',
    entry: {
        mian: path.resolve(__dirname, '../src/app-ts-vue/index.ts')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    resolve: {
        alias: {
           /**
            * @todo https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6
            * 需要编译
            */
           'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_module/
                // include: [ path.resolve(__dirname, '../src/app-ts-vue/**/*')],
            },
            {
                test: /\.scss/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [ /\.vue$/ ],
                },
                include: [ path.resolve(__dirname, '../src/app-ts-vue/**/*') ],
                exclude: /node_module/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'TypeScript and Threejs project',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ]
};
