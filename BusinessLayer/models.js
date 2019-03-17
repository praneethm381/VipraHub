var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
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

const models = mongoose.model('models',categorySchema);
module.exports = models;
