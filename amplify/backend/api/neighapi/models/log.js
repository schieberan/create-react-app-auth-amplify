const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  likes: { type: Number, default: 0 },
  content: { type: String }
});

LogSchema.statics.like = function(id) {
  const Log = mongoose.model('log');

  return Log.findById(id)
    .then(log => {
      ++log.likes;
      return log.save();
    })
}

mongoose.model('log', LogSchema);
