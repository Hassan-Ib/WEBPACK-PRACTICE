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
};
