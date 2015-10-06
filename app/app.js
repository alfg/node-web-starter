var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var corsConfig = require('./cors');

var config = require('../config');
var routes = require('./api/routes');
var web = require('./web/controllers/index');
var cache = require('./cache');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'web/views'));
app.set('view engine', 'hbs');

// configure app
app.use(morgan('dev')); // log requests to the console
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors(corsConfig)); // Set CORS configuration allowed-origins.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'web/dist')));

app.use('/', web);

// register api v1 routes
app.use('/api', routes.index);
app.use('/api/users', routes.users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
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
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;
