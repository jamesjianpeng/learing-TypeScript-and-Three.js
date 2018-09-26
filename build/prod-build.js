/**
 * @file 生产环境下的配置
 * @author jamesjianpeng
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let webpackConfig = require('../webpack/webpack.prod.conf');
const baseConf = require('../webpack/webpack.base.conf');
const tsConf = require('../webpack/webpack.ts.conf');
const vueConf = require('../webpack/webpack.vue.conf');
const tsVueConf = require('../webpack/webpack.ts.vue.conf');

const argv = Array.from(process.argv)

/**  #region only .js */
if (!argv[2]) {
    webpackConfig = merge(webpackConfig, tsConf)
}
/**  #endregion */

/**  #region only compiler ts */
if (argv.includes('ts')) {
    webpackConfig = merge(webpackConfig, tsConf)
}
/**  #endregion */

/**  #region only compiler vue */
if (argv.includes('vue')) {
    webpackConfig = merge(webpackConfig, vueConf)
}
/**  #endregion */

/**  #region only compiler TypeScript and Vue */
if (argv.includes('tsvue')) {
    webpackConfig = merge(webpackConfig, tsVueConf)
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
