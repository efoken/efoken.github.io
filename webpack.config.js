'use strict'; // eslint-disable-line

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const { NODE_ENV } = process.env;

const buildingForLocal = NODE_ENV === 'development';

const config = {
  output: {
    filename: buildingForLocal ? '[name].js' : '[name].[hash].js',
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.js',
    },
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  mode: buildingForLocal ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
      environment: process.env.NODE_ENV,
      isLocalBuild: buildingForLocal,
      imgPath: !buildingForLocal ? 'assets' : 'src/assets',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: buildingForLocal ? '[name].css' : '[name].[hash].css',
      chunkFilename: buildingForLocal ? '[name].css' : '[name].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development' || NODE_ENV === 'staging'),
        NODE_ENV: `"${NODE_ENV}"`,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: !buildingForLocal ? [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ] : [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        query: {
          name: 'img/[name].[hash].[ext]',
          useRelativePath: buildingForLocal,
        },
      },
      {
        test: /\.(ttf|woff2?|eot|svg)$/,
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[hash].[ext]',
          useRelativePath: buildingForLocal,
        },
      },
    ],
  },
};

if (!buildingForLocal) {
  config.plugins = config.plugins.concat([
    new PrerenderSpaPlugin({
      staticDir: __dirname,
      routes: ['/'],
    }),
  ]);
}

module.exports = config;
