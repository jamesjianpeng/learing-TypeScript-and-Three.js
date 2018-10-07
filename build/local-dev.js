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
// const tsDevConf = require('../webpack/webpack.dev.ts.multiple.conf');
const { devScript } = require('./base-dev.js');

const argv = Array.from(process.argv)

/**  #region only .js */
if (!argv[2]) {
    devConf.devServer.historyApiFallback = {
        rewrites: [
            { from: /^\//, to: '/index.html' },
            { from: /^\/selection-sort/, to: '/selection-sort.html' },
            { from: /^\/bubble-sort/, to: '/bubble-sort.html' },
            { from: /^\/insertion-sort/, to: '/insertion-sort.html' },
        ]
    };
    devConf = merge(baseConf, devConf)
}
/**  #endregion */

/**  #region only compiler TypeScript 多页面 */
if (argv.includes('ts')) {
    devConf.devServer.historyApiFallback = {
        rewrites: [
            { from: /^\//, to: '/index-threejs.html' },
            { from: /^\/index-ts/, to: '/index-ts.html' },
            { from: /^\/index-threejs/, to: '/index-threejs.html' }
        ]
    };
    devConf = merge(tsConf, devConf);
}
/**  #endregion */

/**  #region only compiler Vue */
if (argv.includes('vue')) {
    devConf = merge(vueConf, devConf)
}
/**  #endregion */

/**  #region only compiler TypeScript and Vue */
if (argv.includes('tsvue')) {
    devConf = merge(tsVueConf, devConf)
}
/**  #endregion */

devScript(devConf)
