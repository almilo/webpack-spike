var webpackProduction = require('./webpack.base.config.js')('vendor-[hash].js', 'app-[hash].js', 'app-[hash].css');

webpackProduction.storeStatsTo = 'webpackStatistics';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
        clean: {
            production: [webpackProduction.output.path]
        },
        copy: {
            production: {
                src: 'src/index.html',
                dest: 'dist/index.html',
                options: {
                    process: function (content) {
                        return content.replace(/(=".*-)(hash)(\..*")/g, replaceWithCompileHash);

                        function replaceWithCompileHash(match, prefix, hash, sufix) {
                            return prefix + grunt.template.process('<%=' + webpackProduction.storeStatsTo + '.hash%>') + sufix;
                        }
                    }
                }
            }
        },
        webpack: {
            production: webpackProduction
        }
    });

    grunt.registerTask('default', ['clean:production', 'webpack:production', 'copy:production']);
};
