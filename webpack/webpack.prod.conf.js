/**
 * @file 打包环境下的关键配置
 * @author jamesjianpeng
 */
const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
    mode: 'production', // "production" | "development" | "none"
});
