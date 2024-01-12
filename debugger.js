const webpack = require("./cwebpack"); //手写webpack
const webpackOptions = require("./webpack.config.js"); //这里一般会放配置信息

const compiler = webpack(webpackOptions);

compiler.run((err, stats) => {
  console.log(err);
  console.log(
    stats.toJson({
      assets: true, //打印本次编译产出的资源
      chunks: true, //打印本次编译产出的代码块
      modules: true, //打印本次编译产出的模块
    })
  );
});
