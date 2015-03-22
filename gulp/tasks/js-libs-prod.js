var gulp         = require('gulp');

gulp.task('js-libs', function() {
    gulp.src('src/js/libs/**/*.js',{base: 'src/js/libs'})
    .pipe(gulp.dest('build/production/js/libs'))
});
