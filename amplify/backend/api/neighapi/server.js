const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
mongoose
  .connect(
    `mongodb://schiebs:pZsxv0MKYZ4fhOMZ@cluster0-shard-00-00.025ux.mongodb.net:27017,cluster0-shard-00-01.025ux.mongodb.net:27017,cluster0-shard-00-02.025ux.mongodb.net:27017/database?ssl=true&replicaSet=atlas-av4vev-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use("/graphql", expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../../../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));


module.exports = app;
