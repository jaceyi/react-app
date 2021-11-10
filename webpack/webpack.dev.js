const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      context: 'src'
    }),
    new ReactRefreshWebpackPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '../public')
    },
    hot: true,
    allowedHosts: 'all',
    port: 8080
  }
});
