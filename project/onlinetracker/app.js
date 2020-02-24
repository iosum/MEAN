const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// import mongoose for db connection
const mongoose = require('mongoose');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// add reference to the project controller
const projectsRouter = require('./routes/projects');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// map any urls starting with /projects to be handled by the projects controller
app.use('/projects', projectsRouter);

// db connection
const globals = require('./config/globals');

// set up a few options as json object

mongoose.connect(globals.db, {
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then (
    (res) => {
      console.log('connect to db');
    }
).catch(() => {
  console.log('404');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
