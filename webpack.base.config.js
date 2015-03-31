var webpack = require('webpack'), ExtractTextPlugin = require('extract-text-webpack-plugin'),
    srcPath = __dirname + '/src/', distPath = __dirname + '/dist/',
    fontFileLoader = 'file?name=font/[name]-[hash].[ext]';

module.exports = function (vendorJsFilename, appJsFilename, appCssFilename) {
    return {
        context: srcPath,
        resolve: {
            modulesDirectories: ['node_modules', 'bower_components']
        },
        entry: {
            app: './index.js',
            vendor: ['../vendor/jquery', '../vendor/angular']
        },
        output: {
            path: distPath,
            filename: appJsFilename
        },
        module: {
            loaders: [
                {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
                {test: /\.woff$/, loader: fontFileLoader},
                {test: /\.woff2$/, loader: fontFileLoader},
                {test: /\.ttf$/, loader: fontFileLoader},
                {test: /\.eot$/, loader: fontFileLoader},
                {test: /\.svg$/, loader: fontFileLoader}
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', vendorJsFilename),
            new webpack.DefinePlugin({
                'DEBUG': process.env.DEBUG === 'true'
            }),
            new webpack.ResolverPlugin(
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
            ),
            new ExtractTextPlugin(appCssFilename)
        ]
    }
};
