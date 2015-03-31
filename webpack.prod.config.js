var webpack = require('webpack'),
    webpackProduction = require('./webpack.base.config.js')('vendor-[hash].js', 'app-[hash].js', 'app-[hash].css'),
    uglifyJsOptions = {mangle: false, test: /app.*\.js($|\?)/i};

webpackProduction.storeStatsTo = 'webpackStatistics';
webpackProduction.plugins.push(new webpack.optimize.UglifyJsPlugin(uglifyJsOptions));

module.exports = webpackProduction;
