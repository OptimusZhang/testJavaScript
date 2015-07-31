module.exports = function(grunt) {
  'use strict';

  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // grunt-bower
    bower: {
      install: {
        options: {
          targetDir: './static',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false
        }
      }
    },
    // require-handlebars-plugin/hbs‚ªbower‚¾‚ÆƒRƒs[‚Å‚«‚È‚¢‚Ì‚Ågrunt‚©‚çÀ{‚·‚é
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/require-handlebars-plugin/',
            src: ['hbs/*'],
            dest: 'static/js/require-handlebars-plugin'
          }
        ]
      }
    }
  });

  //Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('default', ['bower', 'copy']);
};
