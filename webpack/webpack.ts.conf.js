<<<<<<< HEAD
/**
 * @file ts 的配置
 * @author jamesjianpeng
 */
const path = require('path');
=======
>>>>>>> d0f3cc4a1ce57fced96193bac055a1f1c2ae5774
const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
    mode: 'none',
<<<<<<< HEAD
    entry: {
        'main': path.resolve(__dirname, '../src/index-ts.js')
    },
=======
>>>>>>> d0f3cc4a1ce57fced96193bac055a1f1c2ae5774
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
