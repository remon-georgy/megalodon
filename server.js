var fs = require('fs');
var path = require('path');
var express = require('express');
var serveIndex = require('serve-index');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));


/*
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
*/

app.use(express.static('public'));

// Directory listing for sub-public directories.
// TODO should I specify them one by one?
app.use('/scripts', serveIndex('public/scripts', {'icons': true}));
app.use('/music21j', serveIndex('public/music21j', {'icons': true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// Serving static files.




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
