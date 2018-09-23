const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const devConfig = require('../webpack/webpack.dev.conf');

webpackDevServer.addDevServerEntrypoints(devConfig, devConfig.devServer);

const compiler = webpack(devConfig);

new webpackDevServer(compiler, devConfig.devServer)
  .listen(devConfig.devServer.port);
