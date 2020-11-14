const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Mare = mongoose.model('mare');
const Log = mongoose.model('log');
const Status = mongoose.model('status');
const MareType = require('./mare_type');
const LogType = require('./log_type');
const StatusType = require('./status_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMare: {
      type: MareType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name}) {
        return (new Mare({ name})).save()
      }
    },
    addLogToMare: {
      type: MareType,
      args: {
        content: { type: GraphQLString },
        mareId: { type: GraphQLID }
      },
      resolve(parentValue, { content, mareId }) {
        return Mare.addLog(mareId, content);
      }
    },
    likeLog: {
      type: LogType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Log.like(id);
      }
    },
    deleteMare: {
      type: MareType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Mare.remove({ _id: id });
      }
    },
    addStatus: {
      type: StatusType,
      args: {
        camera: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        stat: { type: GraphQLString },
      },
      resolve(parentValue, { name}) {
        return (new Status({ camera, date, time, stat})).save()
      }
    },
    deleteStatus: {
      type: StatusType,
      args: { id: { type: GraphQLID }},
      resolve(parentValue, { id }) {
        return Status.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
