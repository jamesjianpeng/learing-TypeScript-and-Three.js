/**
 * @file 把需要用到的 configuration 都引进来，根据命令行的传参数去区分启动的服务是为某个项目服务
 * @author jamesjianpeng
 */
const merge = require('webpack-merge');
let devConf = require('../webpack/webpack.dev.conf');
const tsConf = require('../webpack/webpack.ts.conf');
const vueConf = require('../webpack/webpack.vue.conf');
const { devScript } = require('./base-dev.js');

/**  #region only compiler ts */
const argv = Array.from(process.argv)
if (argv.includes('ts')) {
    devConf = merge(devConf, tsConf)
}
/**  #endregion */

/**  #region only compiler vue */
if (argv.includes('vue')) {
    devConf = merge(devConf, vueConf)
}
/**  #endregion */

devScript(devConf)
