const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');

module.exports = env => {
  return merge(common(env), {
    mode: 'production',

    devtool: false,

    plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()]
  });
};
