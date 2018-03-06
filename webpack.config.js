const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pug Template',
      h2: 'Checkout',
      template: '!!pug-loader!src/index.pug',
      posts: [{
        name: 'Tomate',
        price: 1.50 
      }, 
      {name: 'carrots',
      price: 2}, {
      name: 'apple', 
      price: 4
      }]
    }),
  ]
}
module.exports = config;