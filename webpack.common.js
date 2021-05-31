const path = require("path");
//to use webpack.common.js in other webpack file we need to install webpack-merge[yarn add webpack-merge]

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // for loading files
      },
      {
        test: /\.(png|svg|gif|jpg|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
