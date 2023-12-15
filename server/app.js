var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');

var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://ahsaankhatri:ahsaan123@cluster0.0fwmi.mongodb.net/Scala?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database!')
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
    });

app.use(session({
  name : 'uid',
  secret : 'LoginSession',
  saveUninitialized : false,
  resave: false,
  cookie : {
    expires : 6000000
  }
}))


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
