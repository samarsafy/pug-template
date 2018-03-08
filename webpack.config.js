const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Pug Test',
      minify: {
        collapseWhitespace: true
      },
      posts: [
        {
          name: 'pen',
          price: 1.50
        }, {
          name: 'carrots',
          price: 2
        }, {
          name: 'apple',
          price: 4
        }
      ],
      template: '!!pug-loader!src/index.pug'
    })]
};
module.exports = config;