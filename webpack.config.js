const path = require("path");

const TerserPlugin = require('terser-webpack-plugin');
// 引入clean-webpack-plugin插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 
module.exports={
    mode:'none',  
    devtool: 'source-map',
    entry:{
        entry: "./src/index.js",//入口文件，就是上步骤的src目录下的index.js文件，
    },
    output:{
        path: path.resolve(__dirname, './dist'),//输出路径，就是上步骤中新建的dist目录，
        publicPath: '/dist/',
        filename: 'timedtask.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    // plugins进行插件的配置
    plugins: [
      // 清除dist文件夹
      new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({    //此插件在webpack4之后，当mode 设置为production时，默认开启压缩
                include: /\.min\.js$/,  //匹配min.js结尾的文件进行压缩
            })
        ]
    }
}