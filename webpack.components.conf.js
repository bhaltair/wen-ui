var path = require('path');
var config = require('./package.json');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack')
var isProduction = process.env.NODE_ENV === 'production';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: './packages/index'
  },
  output: {
    path: path.resolve(__dirname, 'output'),
    publicPath: "/",
    filename: '[name].js',
    library: 'wenUi',
    libraryTarget: 'umd',
    // umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [autoprefixer()]
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('packages'), resolve('test')],
        exclude: /node_modules/
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }, {
        test: /\.(png|jpg|gif|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'img/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      'CONFIG': config
    }),
    // new ExtractTextPlugin({
    //   filename: utils.assetsPath('css/[name].[contenthash].css')
    // }),
    new webpack.optimize.UglifyJsPlugin({
       parallel: true,
       sourceMap: false
    })
  ]
}
