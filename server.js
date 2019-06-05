var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/dist/index_bundle.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index_bundle.js'));
});

app.use(express.static('dist'));

app.listen(8080);