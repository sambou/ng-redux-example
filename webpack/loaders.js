var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      cacheDirectory: true
    }
  },
  {
    test: /\.ts(x?)/,
    loader: 'babel!ts-loader',
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', '!css-loader!sass-loader'),
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    exclude: /node_modules/
  },
  {
    test: /\.otf$/,
    loader: 'file',
    exclude: /node_modules/
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    exclude: /node_modules/,
    loaders: [
      'file?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
  },
  {
    test: /\.html$/,
    loader: 'html-loader',
    exclude: /node_modules/
  }
];
