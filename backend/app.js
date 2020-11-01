var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var apiRouter = require('./routes/api');
const mongoose = require('mongoose');

var app = express();
// require('./helpers/initMongo')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var mongoDB = 'mongodb+srv://MihirBafna:MihirBafna@lanoscluster.nindp.mongodb.net/LANOSDB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.model('users',{name: String});
app.get('/users', function (req,res) {
  mongoose.model('users').find(function(err,users) {
    res.send({name: "Mihir"});
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use("/api",apiRouter);
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
