'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '**/*.js',
                '!**/*Spec.js',
                '!app/bower_components/**/*.js',
                '!node_modules/**/*.js',
                '!build/*.js',
                '!dist/*.js',
                '!coverage/**/*.js'
            ]
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            all: [
                '**/*.js',
                '!**/*Spec.js',
                '!app/bower_components/**/*.js',
                '!node_modules/**/*.js',
                '!build/*.js',
                '!dist/*.js',
                '!coverage/**/*.js'
            ]
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n',
                separator: '\n',
                sourceMap: true
            },
            dist: {
                src: [
                    'app/core/app.js',
                    'app/core/app.routes.js',
                    'app/**/*.js',
                    '!app/bower_components/**/*.js',
                    '!app/**/*Spec.js'
                ],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */',
                sourceMap: true
            },
            build: {
                src: [
                    'app/core/app.js',
                    'app/core/app.routes.js',
                    'app/**/*.js',
                    '!app/bower_components/**/*.js',
                    '!app/**/*Spec.js'
                ],
                dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
            },
            concat: {
                src: 'dist/*.js',
                dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: [
                    'app/**/*.js',
                    '!app/bower_components/**/*.js'
                ],
                tasks: [
                    'concat:dist',
                    'uglify:concat'
                ]
            },
            concat: {
                files: 'dist/*.js',
                tasks: 'uglify:concat'
            },
            validate: {
                files: [
                    '**/*.js',
                    '!app/bower_components/**/*.js',
                    '!node_modules/**/*.js',
                    '!build/*.js',
                    '!dist/*.js',
                    '!coverage/**/*.js'
                ],
                tasks: [
                    'jshint:all',
                    'jscs:all'
                ]
            }
        },
        protractor: {
            options: {
                configFile: 'protractor.conf.js'
            },
            e2e: {
                keepAlive: true,
                noColor: false,
                args: {
                }
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                autoWatch: true
            },
            singleRun: {
                autoWatch: false,
                singleRun: true,
                browsers: ['Firefox']
            }
        }
    });

    grunt.registerTask('default', ['jshint:all', 'jscs:all', 'karma:singleRun', 'concat', 'uglify:concat']);
};
