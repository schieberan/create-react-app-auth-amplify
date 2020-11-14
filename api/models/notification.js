const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  content: String,
  contact: String,
  mareId: String
});

module.exports = mongoose.model('Notification', notificationSchema);