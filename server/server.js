var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config.js').get(process.env.NODE_ENV);

// Routers
var routerManager = require('./routes/routeManager.js');

var app = express();

console.log("environment: " + process.env.NODE_ENV);

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* This will be our Angular folder:
 * we put in this folder the angular generated dist folder files.
 * With this statement Angular can async load the static files and 
 * do his stuff.
 */
app.use(express.static(path.join(__dirname, 'dist')));

// Controller and url mapping
app.use('/api',routerManager);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);    
  res.sendFile(path.join(__dirname + '/error-pages/404.html'));
});


app.listen(process.env.PORT || 3000);
