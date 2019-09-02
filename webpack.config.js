const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let config = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/')],

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'react-dom': '@hot-loader/react-dom'
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
      template: './static/index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css',
      ignoreOrder: false
    })
  ],

  output: {
    filename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

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
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: /src/,
        loader: 'url-loader'
      },
      {
        test: /\.(svg|eot|ttf|woff)$/,
        include: /src/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        include: /src/,
        use: [
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: [
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.entry.unshift('react-hot-loader/patch');
    config.devServer = {
      inline: true,
      historyApiFallback: true,
      contentBase: './static',
      hotOnly: true,
      overlay: {
        warnings: true,
        errors: true
      },
      port: 8080
    };
    config.module.rules.forEach(({ use }) => {
      if (typeof use === 'object' && Reflect.getPrototypeOf(use).includes && use.includes('css-loader')) {
        use.unshift('style-loader')
      }
    })
  } else if (argv.mode === 'production') {
    config.devtool = 'source-map';
    config.optimization = {
      minimizer: [
        new TerserJSPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true
                }
              }
            ]
          },
          canPrint: true
        })
      ],
      mangleWasmImports: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    };
    config.module.rules.forEach(({ use }) => {
      if (typeof use === 'object' && Reflect.getPrototypeOf(use).includes && use.includes('css-loader')) {
        use.unshift(MiniCssExtractPlugin.loader)
      }
    })
  }
  return config;
};
