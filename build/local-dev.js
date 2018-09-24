/**
 * @file 本地开发环境下的 node 脚本，这种方式是通过命令行传参数
 * @author jamesjianpeng
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevServer = require('webpack-dev-server');
let devConf = require('../webpack/webpack.dev.conf');
const tsConf = require('../webpack/webpack.ts.conf');

/**  #region only compiler ts */
const argv = Array.from(process.argv)
if (argv.includes('ts')) {
    devConf = merge(devConf, tsConf)
}
/**  #endregion */

webpackDevServer.addDevServerEntrypoints(devConf, devConf.devServer);
const compiler = webpack(devConf);
new webpackDevServer(compiler, devConf.devServer)
  .listen(devConf.devServer.port);
