const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mareSchema = new Schema({
  camera: String,
  date: String,
  time: String,
  stat: String
});

module.exports = mongoose.model('Mare', mareSchema);