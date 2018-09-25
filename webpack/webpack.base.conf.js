/**
 * @file 使用 es3, 不支持样式的 基础配置
 * @author jamesjianpeng
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        'main': path.resolve(__dirname, '../src/app/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TypeScript and Threejs project',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ]
};
