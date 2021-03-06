const path = require("path");
// html-webpack-plugin / to solve adding contentHashed js file to html automatically
//1: install [yarn add html-webpack-plugin]
// import the plugin with commonjs
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    filename: "main.[contentHash]js", // name of file to spit out
    //contentHash : anytime anything change in our js file a new unique file is created
    // how to clean up the old ones --
    path: path.resolve(__dirname, "dist"), // path to spit the out and folder name, path needs to imported
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      // this creates a new html file with contentHash js in the script tag
      template: "./src/template.html", // html template with no script and css
    }),
  ],
  //loaders [cssLoader, girLoader, sassLoader, ...]
  // module is where the array of rules of implementing loaders are
  module: {
    rules: [
      //css rules
      //style-loader and css-loaders // [yarn add style-loader css-loader]
      // css-loader turns css to valid javasript code
      // style-loader injects style tag with the css code to the DOM
      {
        test: /\.css$/, // test : look for any file with .css at the end of it
        // use : use the array of loaders for files that pass the test [style-loader, css-loader]
        // most be in this order
        use: ["style-loader", "css-loader"],
      },
      // sass-rules / sass-loader
      // dependecies [style-loader, css-loader, sass-loader, node-sass] [yarn add style-loader css-loader sass-loader node-sass]
      // sass-loader depends on node-sass to be installed to work , it turns scss /\.scss$/ files to css file
      // css-loader turns css file to javaScript code (string)
      // style-loader inject the code to the DOM

      {
        test: /\.scss$/, // Looks for all files that ends with .scss / .sass
        use: [
          "style-loader", //3: Inject styles into DOM
          "css-loader", //2: Turns css into commonjs
          "sass-loader", //1: Turns sass/scss files to css
        ],
      },
    ],
  },
};
//caching busting
// to make caching unique for the browser
// working with images
