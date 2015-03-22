var gulp  = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('fb-flo', [], function() {
    var flo = spawn('node', ['server/flo.js']);

    flo.stdout.on('data', function (data) {
          console.log('Flo stdout: ' + data);
    });

    flo.stderr.on('data', function (data) {
          console.log('Flo stderr: ' + data);
    });

    flo.on('exit', function (code) {
          console.log('Flo child process exited with code ' + code);
    });
});
