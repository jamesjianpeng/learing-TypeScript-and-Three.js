const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: '/',
        hot: true,
        host: '0.0.0.0',
        open: true,
        port: 8099
    },
    entry: {
      main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin('dist', {
        //     root: process.cwd(),
        //     verbose: true,
        //     dry: false
        // }),
        new HtmlWebpackPlugin({
            title: 'TypeScript and Threejs project',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ]
};
