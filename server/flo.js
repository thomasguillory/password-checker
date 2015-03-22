var fs   = require('fs');
var path = require('path');
var flo  = require('fb-flo');

var server = flo( __dirname + '/../build/staging', {
    port: 8888,
    host: 'localhost',
    verbose: true,
    glob: [ '**/*.js', '**/*.css', '**/*.html' ]
}, function (filepath, callback) {
    callback({
        resourceURL: filepath,
        contents: fs.readFileSync(__dirname + '/../build/staging/' + filepath),
        reload: (['.html','.js'].indexOf(path.extname(filepath)) > -1)
    });
});
