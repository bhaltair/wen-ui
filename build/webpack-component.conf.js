'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './packages/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'wenwen-ui.min.js',
    library: 'wenwen-ui',
    libraryTarget: 'umd'
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'wenwen-ui.min.css'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: false
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
  ]
})

module.exports = webpackConfig
