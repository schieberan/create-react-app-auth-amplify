const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MareSchema = new Schema({
  camera: { type: String },
  time: { type: String },
  date: { type: String },
  stat: { type: String }
});

mongoose.model('mare', MareSchema);
