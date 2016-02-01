module.exports = function(grunt) {
  'use strict';

  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // grunt-bower
    bower: {
      install: {
        options: {
          targetDir: './lib',  // A directory where you want to keep your Bower packages.
          layout: 'byType',       // Type: string or function Default value: byType
                                  // There are two built-in named layouts: byType and byComponent.
                                  // Reference: https://github.com/yatskevich/grunt-bower-task
          install: true,          // Whether you want to run bower install task itself (e.g. you might not want to do this each time on CI server).
          cleanTargetDir: false,  // Will clean target dir before running install.
          cleanBowerDir: false,    // Will remove bower's dir after copying all needed files into target dir.
          copy: true,             // Copy Bower packages to target directory.
          verbose: false
        }
      }
    },
    // require-handlebars-plugin/hbs
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/require-handlebars-plugin/',
            src: ['hbs/*'],
            dest: 'lib/js/require-handlebars-plugin'
          }
        ]
      }
    }
  });

  //Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('default', ['bower:install', 'copy:main']);
};
