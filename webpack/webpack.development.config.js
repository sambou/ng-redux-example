var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var appRoot = require('app-root-path');
var loaders = require('./loaders');
var extensions = require('./extensions');

module.exports = {
    entry: './src/client/index.ts',
    output: {
        path: appRoot.path + '/target',
        filename: 'bundle.js',
        hash: false
    },
    resolve: {
        extensions: extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            favicon: './src/client/favicon.ico'
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.ProvidePlugin({
          'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new ManifestPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: loaders
    },
    devtool: 'source-map',
};
