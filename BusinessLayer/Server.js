const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');
  // config = require('./DBConnections');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://naveena:naveena@cluster0-6rknx.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
