var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
    index: "./index.js"
  },
  output: {
    filename: "[name].[hash].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      title: "模板", 
      template: "./template.html" 
    })
  ]
};
