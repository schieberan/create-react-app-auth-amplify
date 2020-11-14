const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MareSchema = new Schema({
  name: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  logs: [{
    type: Schema.Types.ObjectId,
    ref: 'log'
  }]
});

MareSchema.statics.addLog = function(id, content) {
  const Log = mongoose.model('log');

  return this.findById(id)
    .then(mare => {
      const log = new Log({ content, mare })
      mare.logs.push(log)
      return Promise.all([log.save(), mare.save()])
        .then(([log, mare]) => mare);
    });
}

MareSchema.statics.findLogs = function(id) {
  return this.findById(id)
    .populate('logs')
    .then(mare => mare.logs);
}

mongoose.model('mare', MareSchema);
