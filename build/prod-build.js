/**
 * @file 生产环境下的配置
 * @author jamesjianpeng
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let prodConf = require('../webpack/webpack.prod.conf');
const baseConf = require('../webpack/webpack.base.conf');
const tsConf = require('../webpack/webpack.ts.conf');
const vueConf = require('../webpack/webpack.vue.conf');
const tsVueConf = require('../webpack/webpack.ts.vue.conf');

const argv = Array.from(process.argv)

/**  #region only .js */
if (!argv[2]) {
    prodConf = merge(tsConf, prodConf)
}
/**  #endregion */

/**  #region only compiler TypeScript */
if (argv.includes('ts')) {
    prodConf = merge(tsConf, prodConf)
}
/**  #endregion */

/**  #region only compiler Vue */
if (argv.includes('vue')) {
    prodConf = merge(vueConf, prodConf)
}
/**  #endregion */

/**  #region only compiler TypeScript and Vue */
if (argv.includes('tsvue')) {
    prodConf = merge(tsVueConf, prodConf)
}
/**  #endregion */

webpack(prodConf, function(err, stats) {
    if (err) throw err;
    if (stats.hasErrors()) {
        console.log(stats, 'has errors end');
    } else {
        console.log('webpack TypeScript and Threejs project finish!')
    }
})
