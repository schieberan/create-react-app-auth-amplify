const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Status = mongoose.model('status');

const StatusType = new GraphQLObjectType({
  name:  'StatusType',
  fields: () => ({
    id: { type: GraphQLID },
    camera: { type: GraphQLString },
    date: { type: GraphQLString },
    stat: { type: GraphQLString }
  })
});

module.exports = StatusType;
