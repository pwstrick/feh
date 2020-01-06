module.exports = {
  mode: "development",
  entry: {
    index: "./index.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { publicPath: "./dist" }
          }
        ]
      },
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

