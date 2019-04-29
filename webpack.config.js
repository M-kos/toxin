const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './uikit/src/index.js',
    output: {
        filename: 'js/[name].js',
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
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({ 
            filename: 'index.html',
            template: path.resolve(__dirname, './uikit/src/index.pug')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './uikit/dist'),
        port: 3200,
        overlay: true,
        open: 'Google Chrome'
    }
}