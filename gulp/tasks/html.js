var gulp   = require('gulp');
var slim   = require('gulp-slim');
var handleErrors = require('../utils/handleErrors');

gulp.task('html', function(){
  return gulp.src('src/html/**/*.slim')
    .pipe(slim({
      pretty: true,
      bundler: true
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('build/staging/'));
});
