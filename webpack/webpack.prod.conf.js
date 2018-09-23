const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: {
      main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: process.cwd(),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'TypeScript and Threejs project',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ]
};
