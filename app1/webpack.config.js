const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 1991
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}