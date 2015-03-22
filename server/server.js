var fs      = require('fs');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../build/staging'));
app.listen(8080,function(){
    console.log('Server listening on 8080');
});
