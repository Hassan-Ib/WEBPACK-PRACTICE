# Webpack installation and Config :octocat:

## installation \[as developer dependecies\]:rocket:

    > initiating node pageage manager \[npm or yarn\]
    > yarn init -y / npm init -y
    > using npm to install webpack
    > npm install --save-dev webpack webpack-cli
    > using yarn to install webpack
    > yarn add webpack webpack-cli --dev

## Adding script to run webpack to package.json

    ```json
    {
        "name": "webpack-Practice",
        "version": "1.0.0",
        "main": "index.js",
        "license": "MIT",
        "scripts": {
            "start": "webpack"
        },
        "devDependencies": {
            "webpack": "^5.36.2",
            "webpack-cli": "^4.6.0"
        }
    }
    ```

## Configuration

    webpack comes with default configuration, to work with this default configuration your folder needs to follow a structure of "./scr/index.js", webpack will spit out a dist folder with bundled js files

## configfiles

    > we always have at least two config file one for development and one for production
    > to config webpack we will create a file "webpack.\[configname\].js" in the root folder in the folder we have

    ```javascript
        module.exports = {
            //all config goes in here
        };
    ```

## CONFIGS

    Configuraton for webpack

### MODE

    mode : \(string\) can either be development or production
    1. development mode :

    ```Javascript
        mode : "development"
    ```
    2. production mode :

    ```Javascript
        mode : "production"
    ```

### Entry

    entry point is to specify where webpack is to start from "filepath/file"
    default of "./src/index.js"

    ```Javascript
        entry : "./src/index.js" // can be which ever path/file you want
    ```

### Devtool

    devtool is to specify what mode of file to be spit out, readable or not true / false

    ```Javascript
        devtool : true // false
    ```

### Output

    output is to specify where the bundled file will be spat out to, its an object with
    1. filename : name for the file to be spat out
    2. path : path to spat the file into



    ```Javascript
        output: {
            filename: "main.[contentHash]js",
            path: path.resolve(__dirname, "dist"), //path.resolve() is a node module that take directory name and new folder name and returns a new path
        }
    ```

#### Hashing

    Hashing is done for the purpose of unique caching, unique caching is neccessary because browser tends to cache file and decides if its neccessary to re download a file or not base on the filename, Hashing solve this problem by changing file name if anything changes in the file
    there are two types of hashing that i know of
    1. \[contentHash\] is used for output.filename uniqueness e.g "main.\[contentHash\].js
    2. \[hash\] is used for other file name e.g in module.rules for file loader filename use.name : "[name].[hash].[ext]"

### Loaders

#### working with css and scss loaders

1. for css file we need two loaders

   > css-loader : which turn css file to commonjs
   > style-loader : which Injects generated commonjs file to the DOM
   > installing the two loaders with yarn
   > yarn add css-loader style-loader
   > we then add the rules for
   > note : loader rules are adde to module.rules

   ```javascript
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           // needs to be in this order
           "style-loader",
           "css-loader",
         ],
       },
     ];
   }
   ```

2. working with sass files
   in addition to style-loader and css-loader we also need to install sass-loader which also
   depends on node-sass to run

   > installation
   > yarn add style-loader css-loader sass-loader node-sass
   > configuration

   ```javascript
   module: {
     rules: [
       {
         test: /\.scss$/,
         use: [
           "style-loader", //3. injects code to the DOM
           "css-loader", //2. turn css file to commonjs code
           "sass-loader", //1. turn sass file to css
         ],
       },
     ];
   }
   ```

#### working with asset / images loaders

1. we need html-loader

   > yarn add html-loader
   > add rule below to webpack module.rules

   ```javascript
   {
       test: /\.html$/,
       use: [
            "html-loader", // this will tell webpack to require any file use in the html
       ],
   },
   ```

2. we need file-loader

   > yarn add file-loader
   > add another rule to webpack module.rules

   ```javascript
    {
       test: /\.(svg|png|jpg|gif|webp)$/, // test
       use: { // object instead of array
           loader: "file-loader",
           options: {
           name: "[name].[hash].[ext]", // hashing file name for caching
           outputPath: "imgs", // output folder
           },
       },
    },
   ```

### Plugins

    plugins is an array of plugins to use in transforming our project

#### html-webpack-plugin

    html-webpack-plugin solve having to add Hashed js file to html manually, it automatically generates a html file with the hased js file added to the DOM., it can generate a new html by it self if nothing is passed to the instance and can also work with a template
    > how to use
    > 1. install html-webpack-plugin [yarn add html-webpack-plugin]
    > 2. import the plugin with commonjs

    ```javascript
        const HtmlWebpackPlugin = require("html-webpack-plugin");

        //usage
        {
            plugins :[new HtmlWebpackPlugin({
                template : "path to html template" // html template file without the script linked
            })]
        }
    ```

#### clean-webpack-plugin

    since html will be linking to one js file at a time and we get new unique js file along side the previous ones every time we change something in our file and run build, clean-webpack-plugin makes sure to remove previous js files and leave us with the current one html is linked to
    > yarn add clean-webpack-plugin
    > note it is used in production
    > we then require it in webpack.prod.js

    ```javascript
        const CleanWebpackPlugin = require("clean-webpack-plugin");

        //usage
        {
            plugins :[new CleanWebpackPlugin()]
        }
    ```

### configuring webpack to spit out multiple bundle

    incases where we want to seperate our own code from vendor\( boostrap and the likes\) code
    this is done with entries
    > we will import all the vendors in one file and import ours in another file
    > we then go to our webpackfile
    > we do this in common
    > we then change output to

    ```javascript
    //common
    {

        entry : {
            main : "./src/index.js",
            vendor : "./src/vendor.js"
        }
        // output
            //if  dev =>
        output : {
            filename : "[name].bundle.js"
            path : path.resolve(__dirname, "dist")
        }
            //if  prod =>
        output : {
            filename : "[name].[contentHash].bundle.js"
            path : path.resolve(__dirname, "dist)
        }
    }
    ```

## common config \[webpack.common.js\]

## development congig \[webpack.dev.js\]

## production config \[webpack.prod.js\]

## Merging config
