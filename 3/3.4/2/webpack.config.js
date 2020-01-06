module.exports = {
  mode: "none",
  entry: {
	index: "./index.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
		exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: []
};