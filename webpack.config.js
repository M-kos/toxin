const path = require('path');

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
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './uikit/dist'),
        port: 3200,
        overlay: true,
        open: 'Google Chrome'
    }
}