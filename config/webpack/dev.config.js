const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '../../src/client')],
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.resolve('../../src/client'), 'node_modules'],
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /.md$/,
        loaders: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
