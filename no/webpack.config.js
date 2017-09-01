const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 entry: {
      app: './src/app.js'
 }
 ,
 output: {
     path: path.resolve(__dirname + '/build'),
     filename: "[name].bundle.js"
 },
 plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
     devServer: {
     contentBase: './dist'
   },  
    module: {
        loaders:[
            { 
            test: /\.js[x]?$/, 
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react' },]
},
}