const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        use: [{
          loader: require.resolve('url-loader'),
          options: {
            limit: 100000,
            name: 'static/media/[name].[hash:8].[ext]',
          }
        },
        {
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: "./dist",
    port: 7322,
    historyApiFallback: true
  }
};