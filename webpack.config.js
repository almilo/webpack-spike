var webpack = require('webpack'), ExtractTextPlugin = require('extract-text-webpack-plugin'), srcPath = __dirname + '/src/';

module.exports = {
    context: srcPath,
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']
    },
    entry: {
        app: './index.js',
        vendor: ['../vendor/jquery', '../vendor/angular']
    },
    output: {
        path: srcPath,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.woff$/, loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'},
            {test: /\.woff2$/, loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff2'},
            {test: /\.ttf$/, loader: 'file?prefix=font/'},
            {test: /\.eot$/, loader: 'file?prefix=font/'},
            {test: /\.svg$/, loader: 'file?prefix=font/'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.DefinePlugin({
            'DEBUG': process.env.NODE_ENV === 'DEBUG'
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new ExtractTextPlugin('app.css')
    ]
};
