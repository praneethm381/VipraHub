var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  categoryID: String,
  name: String
});

const categories = mongoose.model('categories',categorySchema);
module.exports = categories;
