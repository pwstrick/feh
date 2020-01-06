const webpack = require('webpack');
module.exports = {
  mode: "none",
  entry: {
	index: "./index.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  devServer:  {
    contentBase: "./dist",
	host: "10.10.28.139",
	hot: true
  },
  module: {},
  plugins: [
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin()
  ]
};