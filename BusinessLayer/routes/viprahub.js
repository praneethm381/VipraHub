var express = require('express');
var fs = require('fs');
var router = express.Router();
var modelsMetadata = require('../models/modelsMetadata.js');
var usermodels = require('../models/upload.js');
var categories = require('../models/categories.js');

// Model metadata CRUD

router.get('/getAll', function (req, res, next) {
  var q = req.query.q;
  if (q == undefined || q == "" || q == null)
  {
    modelsMetadata.find({}, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  } else {
    modelsMetadata.find({ $or: [{"model_name": new RegExp(q, "gi")}, {"Author": new RegExp(q, "gi")}, {"categoryID": new RegExp(q, "gi")}, {"framework": new RegExp(q, "gi")}, {"size": new RegExp(q, "gi")}, {"epochs": new RegExp(q, "gi")}, {"layersCount": new RegExp(q, "gi")}, {"InputTensors": new RegExp(q, "gi")}, {"OutputTensor": new RegExp(q, "gi")}, {"Optimizer": new RegExp(q, "gi")}, {"LossFunction": new RegExp(q, "gi")},{"AccuracyValue": new RegExp(q, "gi")},{"LossValue": new RegExp(q, "gi")},{"Year": new RegExp(q, "gi")}]}, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  }
});

// { "$text": { "$search": q , "$caseSensitive": false} }

router.post('/', function (req, res, next) {
  modelsMetadata.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

 router.get('/:categoryID', function(req, res, next){
  modelsMetadata.find({"categoryID": req.params.categoryID}, function (err,post){
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/getModel/:modelID', function(req, res, next){
  modelsMetadata.findById({"_id": req.params.modelID}, function (err,post){
    if (err) return next(err);
    //data.URL = "http://localhost:4000/uploadToMongo/chunks/ahhgshgs";
    post.URL = "http://localhost:4000/uploadToMongo/chunks/ahhgshgs";
    res.json(post);
  }).lean().exec();
});

// router.get('/get', function(req, res, next){
//   modelsMetadata.find({}, function (err,data){
//     if (err) return next(err);
//     res.json(data);
//   });
// });
router.get('/getModels', function (req, res, next) {
  var userid = req.query.userid;
  usermodels.find({"userId":userid}, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
});
module.exports = router;

// Author: Dharani-Reading meta data from File


