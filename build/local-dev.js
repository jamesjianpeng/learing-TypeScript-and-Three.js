/**
 * @file 把需要用到的 configuration 都引进来，根据命令行的传参数去区分启动的服务是为某个项目服务
 * @author jamesjianpeng
 */
const merge = require('webpack-merge');
let devConf = require('../webpack/webpack.dev.conf');
const baseConf = require('../webpack/webpack.base.conf');
const tsConf = require('../webpack/webpack.ts.conf');
const vueConf = require('../webpack/webpack.vue.conf');
const tsVueConf = require('../webpack/webpack.ts.vue.conf');
const { devScript } = require('./base-dev.js');

const argv = Array.from(process.argv)

/**  #region only .js */
if (!argv[2]) {
    devConf = merge(devConf, baseConf)
}
/**  #endregion */

/**  #region only compiler ts */
if (argv.includes('ts')) {
    devConf = merge(devConf, tsConf)
}
/**  #endregion */

/**  #region only compiler vue */
if (argv.includes('vue')) {
    devConf = merge(devConf, vueConf)
}
/**  #endregion */

/**  #region only compiler vue */
if (argv.includes('tsvue')) {
    devConf = merge(devConf, tsVueConf)
}
/**  #endregion */

devScript(devConf)
