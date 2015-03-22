var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('serve', [], function() {
    exec('node server/server.js');
});
