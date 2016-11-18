var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: './app.jsx',
    output: { path: __dirname, filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};