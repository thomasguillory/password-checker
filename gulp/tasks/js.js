var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../utils/bundleLogger');
var handleErrors = require('../utils/handleErrors');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');

gulp.task('js', ['js-libs'], function() {
  var bundler = browserify({
    // Required watchify args
    cache: {},
    packageCache: {},
    fullPaths:  true,
    transform:  ['coffeeify'],
    extensions: ['.coffee'],
    entries:    ['./src/js/bundle.coffee'],
    // Enable source maps
    debug: true
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
      // Output destination
      .pipe(gulp.dest('./build/staging/js/'))
      // Log when bundling completes
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
