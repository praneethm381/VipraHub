var express = require('express');
var http = require('http');
var apiRouter = require('./routes/viprahub');
var apiRouterCategory = require('./routes/category');
var apiRouterUpload = require('./routes/upload');
var apiRouterUploadMongo = require('./routes/uploadMongo');
var path = require('path');
require('./resources/db');

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
app.use('/upload', express.static(path.join(__dirname, '../dist/viprahub')));

app.use('/api', apiRouter);
app.use('/category', apiRouterCategory);
app.use('/uploadToMongo', apiRouterUploadMongo);
app.use('/upload', apiRouterUpload);

var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port 4000')
});
