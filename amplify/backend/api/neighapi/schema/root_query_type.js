const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const MareType = require('./mare_type');
const LogType = require('./log_type');
const Log = mongoose.model('log');
const Mare = mongoose.model('mare');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    mares: {
      type: new GraphQLList(MareType),
      resolve() {
        return Mare.find({});
      }
    },
    mare: {
      type: MareType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Mare.findById(id);
      }
    },
    log: {
      type: LogType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Log.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
