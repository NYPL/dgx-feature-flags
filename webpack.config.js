var path = require('path');
var webpack = require('webpack');
var cleanBuild = require('clean-webpack-plugin');
var rootPath = path.resolve(__dirname);

module.exports = {
  context: rootPath + '/src',
  entry: {
    'dgx-feature-flags': ['./index.js'],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js',
    // export itself to a UMD require library convention
    libraryTarget: "umd",
    // name of the global var
    library: "dgxFeatureFlags"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new cleanBuild(['dist'])
  ]
};