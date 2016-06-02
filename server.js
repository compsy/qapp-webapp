// server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

// Setting up body body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;

// Register for the routes - All our routes will be prefixed with /api
app.use('/api/v1/dossiers', routes);

// Middleware to use for all requests 
// For example, it can be used for authentication
routes.use(function(req, res, next) {
    console.log('TODO:... - Authentication per request.');
    next(); // we go to the next routes and don't get stopped here
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
// 'env' == Unix shell as the NODE_ENV environment variable
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Starting the server...
app.listen(port);
console.log('Listening to port ' + port);