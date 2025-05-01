const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
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
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: { filename: '[name][ext]' },
            },
            {
                test: /\.svg/,
                type: 'asset/resource',
                generator: { filename: '[name][ext]' },
            },
            {
                test: /\.json/,
                type: 'asset/resource',
                generator: { filename: '[name][ext]' },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Proportio.app',
            template: './src/index.html',
            scriptLoading: 'defer',
            minify: true,
            hash: true,
            xhtml: true,
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
    ],
    devServer: {
        compress: true,
        port: 9000,
    },
};
