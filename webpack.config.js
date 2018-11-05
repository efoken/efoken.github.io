'use strict'; // eslint-disable-line

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { NODE_ENV } = process.env;

const buildingForLocal = NODE_ENV === 'development';
const outputFilename = buildingForLocal ? '[name]' : '[name].[hash]';

const config = {
  output: {
    filename: `${outputFilename}.js`,
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
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
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'index.html',
      templateParameters: {
        buildingForLocal,
      },
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
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
      filename: `${outputFilename}.css`,
      chunkFilename: `${outputFilename}.css`,
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
        loader: 'babel-loader',
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
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        query: {
          name: `img/${outputFilename}.[ext]`,
          useRelativePath: buildingForLocal,
        },
      },
      {
        test: /\.(ttf|eot|woff2?|svg)$/,
        loader: 'file-loader',
        query: {
          name: `fonts/${outputFilename}.[ext]`,
          useRelativePath: buildingForLocal,
        },
      },
    ],
  },
};

if (!buildingForLocal) {
  config.plugins = config.plugins.concat([
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'],
    }),
    new CnameWebpackPlugin({
      domain: 'eikefoken.com',
    }),
    new RobotstxtPlugin({
      policy: [
        { userAgent: '*', disallow: '' },
      ],
      sitemap: 'https://eikefoken.com/sitemap.xml',
    }),
    new SitemapPlugin('https://eikefoken.com', ['/'], {
      skipGzip: true,
    }),
  ]);
}

module.exports = config;
