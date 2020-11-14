const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Mare = mongoose.model('mare');

const MareType = new GraphQLObjectType({
  name:  'MareType',
  fields: () => ({
    id: { type: GraphQLID },
    camera: { type: GraphQLString },
    time: { type: GraphQLString },
    date: { type: GraphQLString },
    stat: { type: GraphQLString }
  })
});

module.exports = MareType;
