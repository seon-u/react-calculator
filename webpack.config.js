const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode : 'development',
    entry : './index.js',
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'bundle.js'
    },
    devtool : 'inline-source-map',
    rules : [
        {
            test : /\.(js)$/,
            exclude : /node_modules/,
            use : ['babel-loader']
        },
        {
            test : /\.css$/,
            use : [
                {
                    loader : 'style-loader'
                },
                {
                    loader : 'css-loader',
                    options : {
                        modules : true,
                        camelCase : true,
                        sourceMap : true
                    }
                }
            ]
        }
    ],
    plugins : [
        new HtmlWebpackPlugin({
            template : 'public/index.html',
            favicon : 'public/favicon.ico'
        })
    ],
    devServer : {
        host : 'localhost',
        port,
        historyApiFallback : true,
        open : true
    }
};