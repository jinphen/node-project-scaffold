'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

/**
 * create server
 */
gulp.task('server', function() {
    nodemon({
        nodeArgs: ['--harmony'],
        script: 'app.js',
        env: {'DEBUG': '*'}
    });
});
