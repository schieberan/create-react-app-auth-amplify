const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const Schema = require('./api/schema/schema.js');
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb://schiebs:pZsxv0MKYZ4fhOMZ@cluster0-shard-00-00.025ux.mongodb.net:27017,cluster0-shard-00-01.025ux.mongodb.net:27017,cluster0-shard-00-02.025ux.mongodb.net:27017/database?ssl=true&replicaSet=atlas-av4vev-shard-0&authSource=admin&retryWrites=true&w=majority`)
  .then(() => {
    console.log('connected to database');
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
);
