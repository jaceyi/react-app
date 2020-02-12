const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    filename: 'static/js/[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: 'static',
        to: ''
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      chunkFilename: 'static/css/[id].[hash:8].css',
      ignoreOrder: false
    })
  ],

  optimization: {
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
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  }
});
