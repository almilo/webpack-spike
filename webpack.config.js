var webpack = require('webpack'), srcPath = __dirname + '/src/';

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
    loaders: [],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.DefinePlugin({
            'DEBUG': process.env.NODE_ENV === 'DEBUG'
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
    ]
};
