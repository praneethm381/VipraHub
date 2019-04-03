//upload schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  userId: {
    type: String
  },
  name: {
    type: String
  },
  categoryId: {
    type: String
  },
  fileReferenceIDs: [
    Schema.Types.ObjectId
  ]
});

const uploadFile =  mongoose.model('uploads', UploadSchema);
module.exports = uploadFile;
