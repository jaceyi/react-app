const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '../src/')],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: 'static',
        to: ''
      }
    ]),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css',
      ignoreOrder: false
    })
  ],

  output: {
    filename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        include: /src/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        include: /src/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: /src/,
        loader: 'url-loader'
      },
      {
        test: /\.(svg|eot|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};
