const path = require("path"); // to create path
const commonWebpack = require("./webpack.common"); // commonWebpack
const merge = require("webpack-merge"); // merge webpackconfig
const CleanWebpackPlugin = require("clean-webpack-plugin"); // delete unused js file
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css loader
const OptimizeCssAssetsPlugin = require("optimize-css-assets-plugin"); // CSS MINIFICATION
const TerserPlugin = require("terser-webpack-plugin"); // js minification
const HtmlWebpackPlugin = require("html-webpack-plugin"); // can also be use to minify html

module.exports = merge(commonWebpack, {
  mode: "production",
  output: {
    // if we want multiple outputfile we use [name].[contentHash].bundle.js
    filename: "main.[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css into a file
          "css-loader", // 2. turn css to commonjs
          "sass-loader", // 1. turn sass to css
        ],
      },
    ],
  },
});
