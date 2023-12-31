
var express = require('express');
var mongoose  = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var reminderRouter = require('./routes/reminder');
var app = express();
const cors = require('cors');
mongoose.connect('mongodb+srv://nikhilbhu32:vKtuMjk9Q7IKA8I5@cluster0.aoma39t.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to database!");
}).catch((err) => {
  console.log("Connection failed!");
  console.log(err);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/reminder', reminderRouter);





module.exports = app;
