const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Log = mongoose.model('log');

const LogType = new GraphQLObjectType({
  name:  'LogType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    log: {
      type: require('./mare_type'),
      resolve(parentValue) {
        return Log.findById(parentValue).populate('log')
          .then(log => {
            console.log(log)
            return log.log
          });
      }
    }
  })
});

module.exports = LogType;
