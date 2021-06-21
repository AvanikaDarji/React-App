const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        open: true,
        port: 8080
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}