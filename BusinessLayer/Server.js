var express = require('express');
var http = require('http');
var apiRouter = require('./routes/viprahub');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster-x6phc.mongodb.net/CustomerApp?retryWrites=true', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/home', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/login', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/registration', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/search', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/registration', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/userdashboard', express.static(path.join(__dirname, '../dist/viprahub')));

app.use('/api', apiRouter);


var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port 4000')});

module.exports = app;
