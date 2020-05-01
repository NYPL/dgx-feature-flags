const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const rootPath = path.resolve(__dirname);

module.exports = {
  entry: {
    'dgx-feature-flags': [
      path.resolve(rootPath, 'src/index.js')
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js',
    // export itself to a UMD require library convention
    libraryTarget: "umd",
    // name of the global var
    library: "dgxFeatureFlags",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};