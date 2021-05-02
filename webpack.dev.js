const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    // if we want multiple outputfile we use [name].bundle.js
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
});

// dev server // development server to avoid runing npm start over and over
// install webpack-dev-server [yarn add webpack-dev-server]
// package.json file script: start : "webpack-dev-server --config webpack-dev.js --open"
// --open : to open browser tab
// devserver doesnt need dist folder to run , it runs on memory
