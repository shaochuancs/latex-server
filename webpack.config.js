const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

const regExpExpressionDependency = /Critical dependency: the request of a dependency is an expression/;

module.exports = {
  entry: './src/main.ts',
  ignoreWarnings: [{
    module: /log4js/,
    message: regExpExpressionDependency
  },{
    module: /express/,
    message: regExpExpressionDependency
  }],
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: './src/web', to: 'web'}
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
