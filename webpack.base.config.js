var path = require('path'), webpack = require('webpack'), ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (vendorJsFilename, appJsFilename, appCssFilename) {
    var fontFileLoader = 'file?name=font/[name]-[hash].[ext]';

    return {
        context: __dirname,
        entry: {
            vendor: './vendor/index',
            app: './src/index'
        },
        output: {
            path: __dirname + '/dist/',
            filename: appJsFilename
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src')},
                {test: /\.css$/, loader: ExtractTextPlugin.extract('css')},
                {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
                {test: /\.woff$/, loader: fontFileLoader},
                {test: /\.woff2$/, loader: fontFileLoader},
                {test: /\.ttf$/, loader: fontFileLoader},
                {test: /\.eot$/, loader: fontFileLoader},
                {test: /\.svg$/, loader: fontFileLoader}
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', vendorJsFilename),
            new ExtractTextPlugin(appCssFilename)
        ]
    }
};
