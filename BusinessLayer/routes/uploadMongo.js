var express = require('express');
var router = express.Router();
let multer = require('multer');
var upload= require('../services/uploadMongo.service');
var uploadFile = require('../models/upload');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');

router.post('/models', (req,res) => {
  console.log(req.body);

  uploadFile.create(req.body, function (err, post) {
    if (err) return console.log("Error in creating model : "+err);
    res.json(post);
  });
});

router.get('/models', function (req, res, next) {
  console.log('inside models')
  var name = req.query.name;
  var userID = req.query.userID;

  console.log(name)
  console.log(userID)

  if ((name != undefined && name != "" && name != null) && (userID != undefined && userID != "" && userID != null)){
    console.log('both name and userID are given')
    uploadFile.find({"name": name, "userId": userID}, function (err,post){
      if (err) return next(err);
      console.log(post)
      res.json(post);
    });
  } else if ((userID != undefined && userID != "" && userID != null)){
    console.log('userId is given')
    uploadFile.find({"userId": userID}, function (err,post){
      if (err) return next(err);
      console.log(post)
      res.json(post);
    });
  } else if((name == undefined ) && (userID == undefined)) {
    console.log('name and userId are not given')
    uploadFile.find(function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  }
});

router.get('/models/:name', function(req, res, next){
  console.log("inside routes for uploadMongo")
  uploadFile.find({"name": req.params.name}, function (err,post){
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/files', (req, res) => {
  upload(req,res, (err) => {
    if(err){
      console.log("Error in uploading file : "+err);
      return res.status(501).json({error : err});
    }
    res.json({error_code:0, error_desc: null, file_uploaded: true, file_id: req.file.id});
  });
});

router.get('/files/:fileReferenceID', function(req, res, next){
  console.log("inside routes for fileReferenceID")
  let filesData = [];
  let count = 0;

  var conn = mongoose.connection;
  var gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploadFiles'); // set the collection to look up into

  gfs.files.find({}).toArray((err, files) => {
    // Error checking
    if(!files || files.length === 0){
      return res.status(404).json({
        responseCode: 1,
        responseMessage: "error"
      });
    }
    res.json(files.filter((file) => file._id == req.params.fileReferenceID ));
  });
});

router.get('/chunks/:fileID', function(req, res, next){
  console.log("inside routes for fileID")
  let filesData = [];
  let count = 0;

  var conn = mongoose.connection;
  var gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploadFiles'); // set the collection to look up into
  console.log(req.params.fileID);
  gfs.files.findOne({ filename: "WhatsApp Image 2019-03-17 at 12.41.17 AM.jpeg" }, (err, file) => {
    // Check if the input is a valid image or not
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // If the file exists then check whether it is an image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

// Route for getting all the files
router.get('/files', (req, res, next) => {
  console.log("inside files donwload endpoint-----")
  let filesData = [];
  let count = 0;

  var conn = mongoose.connection;
  var gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploadFiles'); // set the collection to look up into

  gfs.files.find({}).toArray((err, files) => {
    // Error checking
    if(!files || files.length === 0){
      return res.status(404).json({
        responseCode: 1,
        responseMessage: "error"
      });
    }

    // Loop through all the files and fetch the necessary information
    files.forEach((file) => {
      filesData[count++] = {
        id: file._id,
        filename: file.filename,
        contentType: file.contentType
      }
    });
    console.log(filesData)
    res.json(filesData);
  });
});


module.exports = router;
