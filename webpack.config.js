var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');

var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [ //добавили babel-loader
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'react-hot-loader'
              },
              {
                loader: 'babel-loader',
                options: babelrcObject
              },
            ]
        },
        {
            test: /\.jsx$/,
            enforce: "pre",
            loader: "eslint-loader",
            include: [
                path.resolve(__dirname, "src"),
            ]
          }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  }
}