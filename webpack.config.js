const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const TerserPlugin = require('terser-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const buildingForLocal = process.env.NODE_ENV === 'development';
const outputFilename = buildingForLocal ? '[name]' : '[name].[hash]';

const config = {
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    filename: `${outputFilename}.js`,
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: { comments: false },
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new PurgecssPlugin({
        paths: glob.sync(path.join(__dirname, 'src/**.{js,ts,tsx,html}')),
        whitelist: ['svg'],
        whitelistPatterns: [/navbar/, /^bg-primary$/, /^fixed-top$/, /collapse/, /container/],
      }),
      new ImageminPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  mode: buildingForLocal ? 'development' : 'production',
  devtool: buildingForLocal ? 'cheap-source-map' : false,
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, 'src/index.html'),
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
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Eike Foken',
      ios: true,
      background_color: '#fff',
      theme_color: '#4e4e5b',
      icons: [
        {
          src: path.join(__dirname, 'src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: `${outputFilename}.css`,
      chunkFilename: `${outputFilename}.css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|json|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: !buildingForLocal
          ? [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                },
              },
            ]
          : [
              'style-loader',
              'css-loader',
              'postcss-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                },
              },
            ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: `img/${outputFilename}.[ext]`,
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
      policy: [{ userAgent: '*', disallow: '' }],
      sitemap: 'https://eikefoken.com/sitemap.xml',
    }),
    new SitemapPlugin('https://eikefoken.com', ['/'], {
      skipGzip: true,
    }),
    new OfflinePlugin(),
  ]);
}

module.exports = config;
