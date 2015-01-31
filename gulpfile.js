/**
 * Created by mozafff on 1/29/2015.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');
gulp.task('connect', function() {
    connect.server({
        root: 'app/', //Our application code will liveinside of app/
        port: 8080
    });
});
gulp.task('minify', function(){
    gulp.src('app/js/diskGolf.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});
var testFiles = [
    'app/bower_components/jquery/dist/jquery.min.js',
    'app/js/diskGolf.js',
    'specs/appSpec.js'
];

gulp.task('test', function() {
    // Be sure to return the stream
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});