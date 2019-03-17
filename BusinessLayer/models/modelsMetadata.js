var mongoose = require('mongoose');

var metadataSchema = new mongoose.Schema({
  model_name: String,
  Author: String,
  categoryID: String,
  framework:String,
  size:String,
  epochs:String,
  layersCount:String,
  InputTensors:String,
  OutputTensor:String,
  Optimizer:String,
  LossFunction:String,
  AccuracyValue:String,
  LossValue:String
});

const modelsMetadata = mongoose.model('modelsmetadatas',metadataSchema);
module.exports = modelsMetadata;
