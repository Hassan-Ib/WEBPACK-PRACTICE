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
