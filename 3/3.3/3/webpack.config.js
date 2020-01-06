module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    list:  "./list.js"
  },
  output: {
    //filename: "[name].bundle.js"
	filename: "[id].bundle.js",
	path: __dirname + "/build"
	//filename: "[name].[hash].bundle.js"
	//filename: "[chunkhash].bundle.js"
	//filename: "[query].bundle.js"
  },
  module: {
    rules: []
  },
  plugins: []
};