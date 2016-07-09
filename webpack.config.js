
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './public/src/app.js',
  output: {
    path: './public/bin',
    // You must not specify an absolute path here.
    filename: 'bundle.js'
  },
  // Set devtool to enable source map.
  devtool: false,
  // Node.js and Music21j modules that webpack shouldb't bundlle.
  externals: {
    'fs': 'empty',
    'child_process': 'empty',
    'xmlhttprequest': 'empty',
    'walk': 'empty',
    'file': 'empty',
    'directory': 'empty',
    // Music21j dependencies.
    'js-beautify': 'empty',
    'MIDI': 'empty',
    'jsonpickle': 'empty',
    'vexflow': 'empty',
    // Non-existing file that disturbs packing process.
    'images/jq.png': 'empty',
    './images/jq.png': 'empty'
  },
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
