var uglifyJsOptions = {mangle: false}, webpack = require('webpack'),
    webpackProduction = require('./webpack.base.config.js')('vendor-[hash].js', 'app-[hash].js', 'app-[hash].css');

webpackProduction.storeStatsTo = 'webpackStatistics';
webpackProduction.plugins.push(new webpack.optimize.UglifyJsPlugin(uglifyJsOptions));

module.exports = webpackProduction;
