const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, '../src/'),

  output: {
    filename: 'static/scripts/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `static/styles/[name]${prodMode ? '.[contenthash]' : ''}.css`,
      chunkFilename: `static/styles/[id]${prodMode ? '.[contenthash]' : ''}.css`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]_[local]__[hash:base64:5]',
                auto: true
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/images/[name].[contenthash].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[contenthash].[ext]'
        }
      }
    ]
  }
};
