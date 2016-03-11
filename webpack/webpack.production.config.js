var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var appRoot = require('app-root-path');
var loaders = require('./loaders.js');
var extensions = require('./extensions.js');

module.exports = {
    entry: './src/client/index.ts',
    output: {
        path: appRoot.path + '/target',
        filename: 'bundle.[hash].js',
        hash: true
    },
    resolve: {
        extensions: extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            favicon: './src/client/favicon.ico'
        }),
        new ExtractTextPlugin('bundle.[hash].css'),
        new ManifestPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.ProvidePlugin({
          'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
    ],
    module: {
        loaders: loaders
    },
    devtool: 'source-map',
};
