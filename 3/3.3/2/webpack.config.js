module.exports = {
  mode: "development",
  //entry: "./index.js",
  // entry: {
    // main: "./index.js"
  // }
  entry: ["./index.js", "./list.js"],
  // entry: {
    // index: "./index.js",
	// list: __dirname + "/list.js"
  // },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: []
  },
  plugins: []
};