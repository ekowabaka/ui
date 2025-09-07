const sass = require('node-sass');
const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt)
{
    grunt.initConfig({
        copy: {
            dist: {
                files: [
                    {expand: true, flatten: true, src: ['dist/fzui.js'], dest: 'demo/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['dist/fzui.css'], dest: 'demo/', filter: 'isFile'}
                ]                
            }
        },
        cssmin: {
            target: {
                files:{
                    'dist/fzui.min.css': 'dist/fzui.css'
                } 
            }
        },
        sass: {
            options : {
                implementation: sass
            },
            dist: {
                files: {
                    'dist/fzui.css' : 'sass/fzui.scss',
                }
            }
        },
        clean : ['dist', 'build'],
        watch: {
            files: ["js/*.js", "sass/*.scss", "examples/*"],
            tasks: ['default']
        },
        webpack: {
            options: {
              stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'production',
            },
            prod: webpackConfig,
            dev: Object.assign({ watch: false }, webpackConfig),
        },
    });
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['sass', 'cssmin', 'webpack', 'copy', 'mustache_render']);
}

