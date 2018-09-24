/**
 * @file 生产环境下的配置
 * @author jamesjianpeng
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const tsConf = require('../webpack/webpack.ts.conf');
let webpackConfig = require('../webpack/webpack.prod.conf');


/**  #region only compiler ts */
const argv = Array.from(process.argv)
if (argv.includes('ts')) {
    webpackConfig = merge(webpackConfig, tsConf)
}
/**  #endregion */

webpack(webpackConfig, function(err, stats) {
    if (err) throw err;
    if (stats.hasErrors()) {
        console.log(stats, 'has errors end');
    } else {
        console.log('webpack TypeScript and Threejs project finish!')
    }
})
