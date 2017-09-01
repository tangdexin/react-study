  const path = require('path');
  const webpack = require("webpack");
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  
  module.exports = {
    entry: './src/index.js',
    // plugins: [
    //  new HtmlWebpackPlugin({
    //    title: 'Output Management',
    // template：
    //  })
    // ],
    devServer: {
     contentBase: './dist',
     hot:true,
     inline:true,
   },
     plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    title: 'Output Management',
    template:'./index.html'
        })
  ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [{
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                
                }
            ]
        }
    }