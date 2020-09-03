const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, {mode}) => ({
  output: {
    publicPath: mode === 'production'
      ? "https://module-federation-example-component-library.vercel.app/"
      : "http://localhost:8081/",
  },

  resolve: {
    extensions: [".jsx", ".js"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "library",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": './src/Button.jsx'
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
})