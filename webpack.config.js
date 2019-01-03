/**
 * DEVELOPMENT CONFIG
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const AWS = require('aws-sdk');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  APP:  path.resolve(__dirname, 'src/index.jsx'),
  SCSS: path.resolve(__dirname, 'src/scss/styles.scss'),
  DIST: path.resolve(__dirname, 'dist'),
  NODE_MODULES: /node_modules/,
  CLEAN: [ 'dist' ]
}

const suffix = '';


module.exports = env => {
  const mode = env.production ? 'production': 'development';
  const isDev = mode === 'development';
  const baseConfig = {
    mode: mode,
    entry: PATHS.APP,
    output: {
      path: PATHS.DIST,
      filename: `js/[name].bundle${suffix}.js`
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: PATHS.NODE_MODULES,
          use: [
            'babel-loader',
            // 'eslint-loader'
          ]
        },
        {
          test: /\.scss$/,
          exclude: PATHS.NODE_MODULES,
          use: [
            { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader, options: { sourceMap: isDev } },
            { loader: 'css-loader', options: { sourceMap: isDev } },
            { loader: 'postcss-loader', options: { sourceMap: isDev } },
            { loader: 'sass-loader', options: { sourceMap: isDev } }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '*', '.js', '.jsx' ],
      alias: {
        handlebars: 'handlebars/dist/handlebars.min.js'
      }
    },
  }

  const envConfig = {
    development: {
      plugins: baseConfig.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
      ]),
      devtool: 'source-map',
      devServer: {
        contentBase: PATHS.DIST,
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
      }
    },
    production: {
      plugins: baseConfig.plugins.concat([
        new CleanWebpackPlugin(PATHS.DIST),
        new MiniCssExtractPlugin({
          filename: `css/[name]${suffix}.css`,
          chunkFilename: 'css/[id].css'
        }),
        new S3Plugin({
          exclude: PATHS.NODE_MODULES,
          include: /.*\.(css|js)/,
          s3Options: {
            region: 'us-west-1',
            credentials: new AWS.SharedIniFileCredentials({
              profile: 'ContentCssJS_NorthAmerica'
            })
          },
          s3UploadOptions: {
            Bucket: 'melaleuca-cdn-source-us/content/microsites/peak-performance'
          },
          cdnizerOptions: {
            defaultCDNBase: 'https://cdnus.melaleuca.com/microsites/peak-performance'
          }
        })
      ])
    }
  }

  return Object.assign({}, baseConfig, envConfig[mode])
}
