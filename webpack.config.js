const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'front-end/src');
const DIST_DIR = path.resolve(__dirname, 'front-end/dist');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: `${DIST_DIR}/index.html`
  //   })
  // ],
  node: {
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  }
};

module.exports = config;