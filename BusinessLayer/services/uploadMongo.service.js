let GridFsStorage = require('multer-gridfs-storage');
var mongoose = require('mongoose');
let multer = require('multer');

let storage = GridFsStorage({
  url: 'mongodb+srv://naveena:naveena@cluster0-6rknx.mongodb.net/viprahub?retryWrites=true',
  file: function(req, file) {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: file.originalname,
        bucketName: 'uploadFiles'
    };
    resolve(fileInfo);
    });
  }
});

module.exports = multer({storage: storage}).single('file');