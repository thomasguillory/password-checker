var gulp = require('gulp');

gulp.task('watch', ['setWatch','html','css','js'], function() {
  gulp.watch('src/html/**',   ['html']);
  gulp.watch('src/css/**',    ['css']);
  gulp.watch('src/js/libs/**', ['js-libs']);
});
