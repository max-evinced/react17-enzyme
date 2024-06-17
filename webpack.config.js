const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module:{
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    },    
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html",
        hash: true, // Cache busting
        filename: '../dist/index.html'
    })]
}
