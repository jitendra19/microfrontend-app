const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 1992
    },
    plugins : [
        new ModuleFederationPlugin({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                "./app2Index": "./src/index.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}