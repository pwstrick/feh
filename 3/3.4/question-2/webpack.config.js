const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: "none",
  entry: {
	index: "./index.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin()
  ]
};