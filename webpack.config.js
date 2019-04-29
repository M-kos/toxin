const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './uikit/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './uikit/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({ 
            filename: 'index.html',
            template: path.resolve(__dirname, './uikit/src/index.pug')
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './uikit/dist'),
        port: 3200,
        overlay: true,
        open: 'Google Chrome'
    }
}