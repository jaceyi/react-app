const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './static',
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080
  }
});
