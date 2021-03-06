var express = require('express');
var http = require('http');
var path = require('path');



var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 8000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/scripts/test', express.static(__dirname+'/app/test'));
  app.use('/', express.static(__dirname+'/app'));
  app.use(express.static(__dirname+'/app/public'));
});


app.configure('development', function() {
  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
