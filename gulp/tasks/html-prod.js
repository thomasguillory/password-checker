var gulp   = require('gulp');
var slim   = require('gulp-slim');
var minifyHTML = require('gulp-minify-html');
var handleErrors = require('../utils/handleErrors');

gulp.task('html-prod', function(){
  return gulp.src('src/html/**/*.slim')
    .pipe(slim({
      pretty: true,
      bundler: true
    }))
    .pipe(minifyHTML({
        empty: true,
        conditionals: true,
        loose: true
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('build/production/'));
});
