  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  //const ExtractTextPlugin = require('extract-text-webpack-plugin');
  module.exports = {
    entry: './src/index.js',
    plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
    ],
    devServer: {
     contentBase: './dist'
   },
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
                    // use: ExtractTextPlugin.extract({
                    //     fallback: "style-loader",
                    //     use: [{
                    //         loader: "css-loader",
                    //         options: {
                    //             modules: true
                    //         }
                    //     }, {
                    //         loader: "postcss-loader"
                    //     }],
                    // })
                }
            ]
        }
    }