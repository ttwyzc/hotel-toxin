const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    app: './entry.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false,
  },
  devServer: {
    port: 1234,
    contentBase: './dist',
    hot: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'pages/colors-n-types/colors-n-types.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'headers.html',
      template: 'pages/headers-n-footers/headers-n-footers.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'forms.html',
      template: 'pages/form-elements/form-elements.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'cards.html',
      template: 'pages/cards/cards.pug',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: '@import "src/styles/variables";',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false,
        },
      },
    ],
  },
};
