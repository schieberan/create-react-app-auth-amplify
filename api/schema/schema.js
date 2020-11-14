  
const graphql = require('graphql');
const _ = require('lodash');
const Mare = require('../models/mare');
const Log = require('../models/log');
const Notification = require('../models/notification');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
  } = graphql;

  const NotificationType = new GraphQLObjectType({
    name: 'Notification',
    fields: () => ({
      id: { type: GraphQLID },
      contact: { type: GraphQLString },
      content: { type: GraphQLString },
      mare: {
        type: MareType,
        resolve(parent, args) {
          return Mare.findById(parent.mareId);
        },
      },
    }),
  });

  const LogType = new GraphQLObjectType({
    name: 'Log',
    fields: () => ({
      id: { type: GraphQLID },
      content: { type: GraphQLString },
      mare: {
        type: MareType,
        resolve(parent, args) {
          return Mare.findById(parent.mareId);
        },
      },
    }),
  });

  const MareType = new GraphQLObjectType({
    name: 'Mare',
    fields: () => ({
      id: { type: GraphQLID },
      camera: { type: GraphQLString },
      date: { type: GraphQLString },
      time: { type: GraphQLString },
      stat: { type: GraphQLString },
      logs: {
        type: new GraphQLList(LogType),
        resolve(parent, args) {
          return Log.find({ mareId: parent.id });
        }
      },
      notifications: {
        type: new GraphQLList(NotificationType),
        resolve(parent, args) {
            return Notification.find({ mareId: parent.id });
        }
      }
    }),
  });

  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      log: {
        type: LogType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Log.findById(args.id);
        },
      },
      notification: {
        type: NotificationType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Notification.findById(args.id);
        },
      },
      mare: {
        type: MareType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Mare.findById(args.id);
        },
      },
      logs: {
        type: new GraphQLList(LogType),
        resolve(parent, args) {
          return Log.find({});
        },
      },
      notifications: {
        type: NotificationType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Notification.find({});
        },
      },
      mares: {
        type: new GraphQLList(MareType),
        resolve(parent, args) {
          return Mare.find({});
        },
      },
    },
  });

  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addMare: {
        type: MareType,
        args: {
          camera: { type: new GraphQLNonNull(GraphQLString) },
          date: { type: new GraphQLNonNull(GraphQLString) },
          time: { type: new GraphQLNonNull(GraphQLString) },
          stat: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          let mare = new Mare({
            camera: args.camera,
            date: args.date,
            time: args.time,
            stat: args.stat
          });
          return mare.save();
        },
      },
      addLog: {
        type: LogType,
        args: {
          content: { type: new GraphQLNonNull(GraphQLString) },
          mareId: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          let log = new Log({
            content: args.content,
            mareId: args.mareId,
          });
          return log.save();
        },
      },
      addNotification: {
        type: NotificationType,
        args: {
          content: { type: new GraphQLNonNull(GraphQLString) },
          contact: { type: new GraphQLNonNull(GraphQLString) },
          mareId: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          let notification = new Notification({
            content: args.content,
            contact: args.contact,
            mareId: args.mareId,
          });
          return notification.save();
        },
      },
    },
  });

  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
  });
  