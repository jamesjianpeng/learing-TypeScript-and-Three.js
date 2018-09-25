/**
 * @file 打包环境下的关键配置
 * @author jamesjianpeng
 */
const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConf, {
    mode: 'production', // "production" | "development" | "none"\
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: process.cwd(),
            verbose: true,
            dry: false
        })
    ]
});
