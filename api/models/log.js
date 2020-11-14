const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  content: String,
  mareId: String
});

module.exports = mongoose.model('Log', logSchema);