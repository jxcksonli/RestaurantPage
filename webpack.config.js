// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource', // For handling images
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"], // For handling CSS files
        },
    ],
  },
};
