/**
 * Created by Administrator on 2014/6/11.
 * http://benfrain.com/lightning-fast-sass-compiling-with-libsass-node-sass-and-grunt-sass/
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: './',
            srcPath: './assets/sass/',
            deployPath: './assets/css/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        sass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>style.css': '<%= meta.srcPath %>style.scss'
                },
                options: {
                    sourcemap: 'true',
//                    outputStyle: 'compressed'  //nested
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '<%= meta.srcPath %>style.scss'
                ],
                tasks: ['sass:dist']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass']);
};