const path = require('path');

module.exports = {
  entry: './src/main.ts',
  ignoreWarnings: [{
    module: /log4js/,
    message: /Critical dependency: the request of a dependency is an expression/
  }],
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
