const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
    entry: {
        home: './src/index.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Electronic Dashboard',
            template: './src/index.html',
            // publicPath: '/electronic/',
            scriptLoading: 'defer',
            minify: true,
            hash: true,
            xhtml: true,
        }),
        new MiniCssExtractPlugin({filename: 'app.css'}),
    ],
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        compress: true,
        port: 9000,
    },
};