/**
 * Created by mozafff on 1/29/2015.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('connect', function() {
    connect.server({
        root: 'app/', //Our application code will liveinside of app/
        port: 8080
    });
});