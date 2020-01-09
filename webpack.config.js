const PurgecssPlugin = require('purgecss-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  entry: './src/index.js',
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }]
        },     
      }),
      new PurgecssPlugin({
        paths: [path.resolve(__dirname, 'src', 'index.html')]
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      hash: argv.mode === 'production',
      minify: argv.mode === 'production' ? {
        collapseWhitespace: true,
        removeComments: true
      } : false,
    }),
    new CleanWebpackPlugin(),
  ]
}); 