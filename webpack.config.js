/**
 * Created by wmm on 2017/5/7.
 */

var webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
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
                loader: 'style-loader!css-loader'//跟前面相比就在后面加上了?modules
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}