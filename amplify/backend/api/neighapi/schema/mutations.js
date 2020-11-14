const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Mare = mongoose.model('mare');
const Log = mongoose.model('log');
const MareType = require('./mare_type');
const LogType = require('./log_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
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
    addMare: {
      type: MareType,
      args: {
        camera: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        stat: { type: GraphQLString },
      },
      resolve(parentValue, { name}) {
        return (new Mare({ camera, date, time, stat})).save()
      }
    }
  }
});

module.exports = mutation;
