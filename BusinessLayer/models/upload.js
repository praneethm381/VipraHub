//upload schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  name: {
    type: String,
  },
  categoryId: {
    type: String,
  },
  fileReferenceID: {
    type: Schema.Types.ObjectId,
  }
});

const uploadFile =  mongoose.model('uploads', UploadSchema);
module.exports = uploadFile;
