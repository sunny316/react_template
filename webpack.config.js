var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
     
 module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                    loader: "babel-loader"
                  },
             }
         ]
     },
     devServer: {
        compress: true,
        inline: true,
        port: '8080',
        allowedHosts: [
            '0.0.0.0'
        ]
      },      
     plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
 };