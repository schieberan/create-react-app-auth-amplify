const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const LogType = require('./log_type');
const Mare = mongoose.model('mare');

const MareType = new GraphQLObjectType({
  name:  'MareType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    logs: {
      type: new GraphQLList(LogType),
      resolve(parentValue) {
        return Mare.findLogs(parentValue.id);
      }
    }
  })
});

module.exports = MareType;
