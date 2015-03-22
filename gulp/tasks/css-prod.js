var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css')
var handleErrors = require('../utils/handleErrors');

gulp.task('css-prod', [], function () {
  return sass('src/css/bundle.sass',{
      compass: true,
      bundleExec: true
    })
    .pipe(minifyCSS({
        aggressiveMerging: false
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('build/production/css'));
});
