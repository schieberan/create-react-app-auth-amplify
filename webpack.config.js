  
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.(js|jsx)$)/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", '@babel/react'] }
      },
      {
      test: /\.(jpg|png|svg)$/,
      use: {
      loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file?name=fonts/[name].[ext]!static'
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            'sass-loader'
          ]
     }
    ]
  }
};