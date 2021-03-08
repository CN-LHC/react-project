/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map', // 如何何生成源映射
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
        overlay: true,
        quiet: true,
        port: 8088,
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name]-[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: [
                        //         ['@babel/preset-env', {"debug": false }]
                        //     ],
                        //     plugins: [
                        //         ["@babel/plugin-proposal-decorators", { "legacy": true }]
                        //     ],
                        // }
                    }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 请空之前打包的内容
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './index.html',
            filename: 'index.html'
        }), // 生成html文件,将其他文件注入到html中
        new WebpackBar() // 进度条
    ]
}