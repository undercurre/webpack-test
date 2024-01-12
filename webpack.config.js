const path = require("path");
const WebpackRunPlugin = require("./cplugin1");
const WebpackDonePlugin = require("./cplugin2");
const { loader1, loader2 } = require("./cloader");

module.exports = {
  mode: "development", //防止代码被压缩
  entry: "./src/index.js", //入口文件
  plugins: [new WebpackRunPlugin(), new WebpackDonePlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "source-map", //防止干扰源文件,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [loader1, loader2],
      },
    ],
  },
};
