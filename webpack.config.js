const webpack = require("webpack")
const path = require("path")

const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin")

let config = {
  entry: "./client/video-watch-client-plugin.js",
  output: {
    path: path.resolve(__dirname, "./client"),
    filename: "./video-watch-client-plugin-out.js",
    library: "script",
    libraryTarget: "var"
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
}

module.exports = config
