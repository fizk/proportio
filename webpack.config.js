const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
