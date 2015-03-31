'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/mapaGoogle.css': '**/*.scss'

                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass','cssmin', 'uglify','beep:2']
            },
            options: {
                livereload: true
            }
        },
        cssmin: {
            target:{
                files:{
                'css/mapaGoogle.min.css': 'css/mapaGoogle.css'
                }
            }
        },

        uglify: {
            dist: {
              files: {
                'js/initMapa.min.js': 'js/initMapa.js',
                'js/seteosGmaps.min.js': 'js/seteosGmaps.js'
              }
            }
        }

    });


    //Register modules to user
    grunt.loadNpmTasks('grunt-beep');    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['cssmin', 'uglify']);
};