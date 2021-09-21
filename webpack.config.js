const path = require("path");

const webpack = require("webpack");
const AutoReloadServerPlugin = require("auto-reload-webpack-plugin");

module.exports = {
    mode: "development",
    watch: true,
    stats: "errors-only",
    target: "node",
    entry: "./index.ts",
    externalsPresets: { node: true },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".mjs"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
          },
          {
            test: /\.([jt]sx?)$/,
            use: ["babel-loader"],
            exclude: /node_modules/,
          },
        ],
    },
    plugins: [
        new AutoReloadServerPlugin({
          filePath: "./dist/main.js",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}