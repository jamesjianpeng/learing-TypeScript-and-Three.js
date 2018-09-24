const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
    mode: 'none',
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
