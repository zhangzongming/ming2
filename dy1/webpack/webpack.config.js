const path = require('path');

//导出模块，必须这样写，webpack定制的写法，webpack的命令使用
module.exports = {
    mode: 'development', //可以设置为开发模式或者生产模式 production
    entry: { //配置我需要处理的入口模块
        bundle: __dirname + '/src/index.js',
        bundle2: __dirname + '/src/home.js'
    },
    output: {
        filename: '[name].js', // 把入口模块所有的模块，通通打包进对应的.js文件里面
        path: path.resolve(__dirname, 'dist') //配置打包输出的地方
    },
    module: {
        rules: [
            //处理.txt后缀的文件 raw-loader加载器去把webpack扩展了一些功能
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.jade$/,
                use: 'jade-loader'
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            {
                test: /\.scss|css$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,  //排除掉
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] //自动将es2015+ 的代码转换为es5
                    }
                }
            }

        ]
    }
};