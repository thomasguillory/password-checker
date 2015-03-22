var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../utils/handleErrors');

gulp.task('css', [], function () {
  return sass('src/css/bundle.sass',{
      compass: true,
      bundleExec: true,
      sourcemap: true
    })
    .pipe(sourcemaps.write())
    .on('error', handleErrors)
    .pipe(gulp.dest('build/staging/css'));
});
