const path = require('path');
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const pxtorem = require('postcss-pxtorem');
module.exports = {
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    publicPath: '/',

    // 放置静态资源的地方 (js/css/img/font/...)
    assetsDir: 'static',

    // 用于多页配置，默认是 undefined
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js',
            /*这个是根入口文件*/
            // 模板文件
            template: 'public/index.html',
            // 输出文件
            filename: 'index.html',
            // 页面title
            title: '组件化项目'
        },
        // 简写格式
        // 模板文件默认是 `public/subpage.html`
        // 如果不存在，就是 `public/index.html`.
        // 输出文件默认是 `subpage.html`.
        // subpage: 'src/main.js'　　　　/*注意这个是*/
    },

    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: false,

    // babel-loader 默认会跳过 node_modules 依赖。
    // 通过这个选项可以显式转译一个依赖。
    transpileDependencies: [ /* string or regex */ ],

    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,

    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: (config) => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    // resources: './path/to/resources.scss',

                    // Or array of paths
                    resources: ['./src/assets/css/theme.scss']
                })
                .end()
        })
    },

    configureWebpack: (config) => {
        [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

            //打包压缩
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), //匹配文件名
                threshold: 10240, //对超过10k的数据压缩
                minRatio: 0.8
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 5,
                minChunkSize: 100
            })
        ]
    },

    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
    pwa: {},
    css: {},

    // 三方插件的选项
    pluginOptions: {}
}