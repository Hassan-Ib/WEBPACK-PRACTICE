const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // can also be use to minify html

module.exports = merge(common, {
  mode: "development",
  output: {
    // if we want multiple outputfile we use [name].bundle.js
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      //style-loader is used in dev because css extraction process takes longer
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});

// dev server // development server to avoid runing npm start over and over
// install webpack-dev-server [yarn add webpack-dev-server]
// package.json file script: start : "webpack server --config webpack-dev.js --open"
// --open : to open browser tab
// devserver doesnt need dist folder to run , it runs on memory

//
