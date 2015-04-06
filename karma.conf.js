module.exports = function (config) {
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: ['**/*.spec.js'],
        browsers: ['Firefox'],
        reporters: ['dots'],
        preprocessors: {
            '**/*.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel', include: /\/src\//}
                ]
            },

        }
    });
};
