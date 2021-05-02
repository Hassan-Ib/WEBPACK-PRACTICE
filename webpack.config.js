const path = require("path");
module.exports = {
  //mode : array of values [development, production] tell webpack if to minify or not
  mode: "development",
  //devtool : bool [true,false]
  //   -- devtool: false,
  // entry : point , starting file for webpack
  entry: "./src/index.js",
  // output : where to spit out the bundled files note: out is an object with
  // 1 : filename : "filename.js", output fileName
  // 2 : path: path.resolve(__dirname,"folderName")} path to put the output
  output: {
    filename: "main.js", // name of file to spit out
    path: path.resolve(__dirname, "dist"), // path to spit the out and folder name, path needs to imported
  },
  //loaders [cssLoader, girLoader, sassLoader, ...]
  // module is where the array of rules of implementing loaders are
  module: {
    rules: [
      //style-loader and css-loaders // [yarn add style-loader css-loader]
      // css-loader turns css to valid javasript code
      // style-loader injects style tag with the css code to the DOM
      {
        test: /\.css$/, // test : look for any file with .css at the end of it
        use: ["style-loader", "css-loader"], // use : use the array of loaders for files that pass the test [style-loader, css-loader] most be in this order
      },
    ],
  },
};