/**
 * @file ts 的配置
 * @author jamesjianpeng
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        'main-ts': path.resolve(__dirname, '../src/app-ts/ts/index-ts.ts'),
        'main-threejs': path.resolve(__dirname, '../src/app-ts/threejs/index-threejs.ts')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    // extensions: [ '.ts', '.js', '.json' ], // extensions 的数组长度大于等于 3
    module: {
      rules: [
          {
              test: /\.(j|t)s?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/app-ts/ts/index-ts.html'),
            filename: 'index-ts.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['main-ts']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/app-ts/threejs/index-threejs.html'),
            filename: 'index-threejs.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            chunks: ['main-threejs']
        })
    ]
};
