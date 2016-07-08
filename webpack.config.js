
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './public/src/app.js',
  output: {
    path: './public/bin',
    filename: 'bundle.js'
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
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(png|jpg|svg|mp3|gif|wav)$/,
        loader: 'url-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.(html|xml|md|txt|rb|zip|map|jar)$/,
        loader: 'ignore-loader'
      }, {
        // Ignore files without extension. e.g. README, INSTALL...etc.
        test: /^([^.]+)$/,
        loader: 'ignore-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
