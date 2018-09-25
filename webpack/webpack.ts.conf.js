/**
 * @file ts 的配置
 * @author jamesjianpeng
 */
const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
    mode: 'none',
    entry: {
        'main': path.resolve(__dirname, '../src/app-ts/index-ts.ts')
    },
    module: {
      rules: [
          {
              test: /\.(j|t)s?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
    },
});
