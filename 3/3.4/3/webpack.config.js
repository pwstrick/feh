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
	//inline: false
  },
  module: {},
  plugins: []
};