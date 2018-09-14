var path = require("path");
const webpack = require('webpack');

module.exports = {

  // This is the entry point or start of react applicaton
  entry: {
    app: ["./app/app"]
  },

  // The plain compiled JavaScript will be output into this file
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },

  // This section for development environment
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  // This section desribes the transformations we will perform
  module: {
    rules: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          // These are the specific transformations we'll be using.
          presets: ['@babel/preset-react', "@babel/preset-env"],
          plugins: ['@babel/proposal-class-properties'],
          //{
            "env": {
              "production": {
                "presets": ["minify"]
              }
            }
          }
        // }
      }
    ]
  },
  // To be able resolve .jsx extension
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  // devtool: "eval-source-map"
  devtool:"cheap-module-source-map"
};
