var webpack = require('webpack'),
    webpackProduction = require('./webpack.base.config.js')('vendor-[hash].js', 'app-[hash].js', 'app-[hash].css'),
    uglifyJsOptions = {mangle: false};

webpackProduction.storeStatsTo = 'webpackStatistics';
webpackProduction.plugins.push(new webpack.optimize.UglifyJsPlugin(uglifyJsOptions));
webpackProduction.output.path = __dirname + '/dist_prod/';

module.exports = webpackProduction;
