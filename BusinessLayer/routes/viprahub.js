var express = require('express');
var router = express.Router();
var modelsMetadata = require('../models/modelsMetadata.js');
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
    modelsMetadata.find({ $or: [{"model_name": q}, {"Author": q}, {"categoryID": q}, {"framework": q}]}, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  }
});

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

// router.get('/get', function(req, res, next){
//   modelsMetadata.find({}, function (err,data){
//     if (err) return next(err);
//     res.json(data);
//   });
// });


module.exports = router;
