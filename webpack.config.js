
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './public/src/app.js',
  output: {
    filename: './public/bin/bundle.js'
  },
  devtool: false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'public/src/'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
