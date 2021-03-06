module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7'],
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
                //'last 10 versions', // 所有主流浏览器最近10版本用
            ],
            grid: true
        },
        'postcss-pxtorem': {
            rootValue: 32, //结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
            propList: ['*'], //属性的选择器，*表示通用
            selectorBlackList: [] //忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
        }
    }
}