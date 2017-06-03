/**
 * Created by wmm on 2017/5/7.
 */
var webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');//热加载
let CompressionWebpackPlugin = require('compression-webpack-plugin'); //压缩文件
module.exports = {
    //devtool: 'eval-source-map', //上线时去掉，否则打包文件很大
    entry:  __dirname + "/src/app/main.js",//入口文件
    output: {
        path: __dirname+'/dist/',//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
        publicPath: '/'
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    module: {
        //在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                exclude: /^node_modules$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader',
            }
        ]
    },
}