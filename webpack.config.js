/**
 * Created by wmm on 2017/5/7.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/src/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            }
            ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'//跟前面相比就在后面加上了?modules
            }

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],


    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}