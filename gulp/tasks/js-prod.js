var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../utils/bundleLogger');
var handleErrors = require('../utils/handleErrors');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var uglify       = require('gulp-uglifyjs');
var streamify    = require('gulp-streamify')

gulp.task('js-prod', ['js-libs-prod'], function() {
  var bundler = browserify({
    // Required watchify args
    cache: {},
    packageCache: {},
    fullPaths:  true,
    transform:  ['coffeeify'],
    extensions: ['.coffee'],
    entries:    ['./src/js/bundle.coffee'],
    // Disable source maps
    debug: false
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Output filename here.
      .pipe(source('bundle.js'))
      .pipe(streamify(uglify()))
      // Output destination
      .pipe(gulp.dest('./build/production/js/'))
      // Log when bundling completes
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
