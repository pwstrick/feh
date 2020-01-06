const merge = require("webpack-merge"),
  common = require("./webpack.common.js");
module.exports = merge(common, {
  output: {
    path: __dirname + "/build"
  }
});