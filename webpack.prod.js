const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'static'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    context: resolve(__dirname, 'client'),

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?importLoaders=1&localIdentName=[path]--[local]&camelCase&modules&sourceMap',
                        'postcss-loader',
                    ],
                }),
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new BabiliPlugin({
            test: /\.js$/,
            comments: false,
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: '[name].css',
        }),
    ],
};