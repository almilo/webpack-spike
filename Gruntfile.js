var webpackProduction = require('./webpack.prod.config.js');

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
                dest: webpackProduction.output.path + 'index.html',
                options: {
                    process: hashFilter
                }
            }
        },
        webpack: {
            production: webpackProduction
        }
    });

    grunt.registerTask('default', ['clean:production', 'webpack:production', 'copy:production']);

    function hashFilter(content) {
        return content.replace(/(=".*-)(hash)(\..*")/g, replaceWithCompileHash);

        function replaceWithCompileHash(match, prefix, hash, sufix) {
            return prefix + grunt.template.process('<%=' + webpackProduction.storeStatsTo + '.hash%>') + sufix;
        }
    }
};

