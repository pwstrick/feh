var ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
  mode: "none",
  entry: {
	index: "./index.js",
	list: "./list.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: []
  },
  plugins: [
    new ManifestPlugin()
  ],
  optimization: {
    //runtimeChunk: true
  }
};