var express = require('express');
var router = express.Router();
let multer = require('multer');
var upload = require('../services/uploadMongo.service');
var uploadFile = require('../models/upload');

router.post('/', (req, res) => {
  upload(req,res, (err) => {
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
  }
  
  var uploadmodel = new uploadFile({
    name: 'category name',
    categoryId: 'category id',
    fileReferenceID: req.file.id
  });

  uploadmodel.save(function(error){
      if(error){ 
        throw error;
      } 
    });
  });

  res.json({error_code:0, error_desc: null, file_uploaded: true});
});

module.exports = router;
