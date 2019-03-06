/**
 * @file 使用 es3, 不支持样式的 基础配置
 * @author jamesjianpeng
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        /**
         * @todo 
         * main: 总入口
         * selection-sort: 选择排序入口
         * bubble-sort: 冒泡排序入口
         * insertion-sort: 插入排序入口
         * shell-sort: 高级 - 希尔排序入口
         * sequence-search 检索算法 - 顺序查找
         */
        'main': path.resolve(__dirname, '../src/app/index.js'),
        'selection-sort': path.resolve(__dirname, '../src/app/sort/selection-sort/index.js'),
        'bubble-sort': path.resolve(__dirname, '../src/app/sort/bubble-sort/index.js'),
        'insertion-sort': path.resolve(__dirname, '../src/app/sort/insertion-sort/index.js'),
        'shell-sort': path.resolve(__dirname, '../src/app/sort/shell-sort/index.js'),
        'sequence-search': path.resolve(__dirname, '../src/app/search/sequence-search/index.js'),
        'threejs-one': path.resolve(__dirname, '../src/app/threejs/one/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JavaScript project',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../src/app/sort/maopao/index.html'),
            filename: 'selection-sort.html',
            title: 'JavaScript project - sort selection-sort',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['selection-sort']
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../src/app/sort/maopao/index.html'),
            filename: 'bubble-sort.html',
            title: 'JavaScript project - sort bubble-sort',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['bubble-sort']
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../src/app/sort/maopao/index.html'),
            filename: 'insertion-sort.html',
            title: 'JavaScript project - sort insertion-sort',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['insertion-sort']
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../src/app/sort/maopao/index.html'),
            filename: 'shell-sort.html',
            title: 'JavaScript project - sort insertion-sort',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['shell-sort']
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../src/app/sort/maopao/index.html'),
            filename: 'sequence-search.html',
            title: 'JavaScript project - sort insertion-sort',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['sequence-search']
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../src/app/sort/maopao/index.html'),
            filename: 'threejs-one.html',
            title: 'JavaScript project - sort insertion-sort',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['threejs-one']
        })
    ]
};
