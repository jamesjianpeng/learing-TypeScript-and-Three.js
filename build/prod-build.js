const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.prod.conf');

webpack(webpackConfig, function(err, stats) {
    if (err) throw err;
    if (stats.hasErrors()) {
        console.log(stats, 'has errors end');
    } else {
        console.log('webpack TypeScript and Threejs project finish!')
    }
})
