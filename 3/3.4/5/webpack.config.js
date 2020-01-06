module.exports = {
  mode: "none",
  entry: {
	// index: "./index.js",
	// list: "./list.js"
	//detail: "./detail.js"
	lazy: "./lazy.js"
  },
  output: {
    filename: "[name].bundle.js",
	chunkFilename: "[name].bundle.js",
	publicPath: "./dist/"
  },
  module: {},
  // optimization: {
	// splitChunks: {
	  // chunks: "all"
	// }
  // },
  plugins: []
};