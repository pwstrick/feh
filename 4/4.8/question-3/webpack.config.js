const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./default.js"
  },
  output: {
    filename: "[name].bundle.js",
	publicPath: "./dist/"
  },
  module: {
    rules: [
		{
			test: /\.vue$/,
			use: [ "vue-loader" ],
			
		},
		{
			test: /\.css$/,
			use: [ "vue-style-loader", "css-loader" ]
		},
	]
  },
  plugins: [
	new VueLoaderPlugin()
  ]
};