'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\r\n\r\n'
        },

        concat: {
            options: {
                separator: '\r\n\r\n'
            },
            build: {
                files: {
                    '_mixins.scss': ['src/mixins/*.scss'],
                    '_functions.scss': ['src/functions/*.scss']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task.
    grunt.registerTask('default', ['concat']);
};
