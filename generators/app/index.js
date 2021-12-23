//该文件作为Generator的核心入口
//需要导出一个继承自 Yeoman Generator 的类型
//Yeoman Generator 在工作时会自动调用此类型中定义的生命周期方法
//在这些方法中可以通过调用父类提供的一些工具方法实现一些功能,例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        //yeoman 在询问用户环节自动调用此方法
        //在此方法中可以调用父类的prompt()方法发出对用户的命令行询问
        return this.prompt({
                type: 'input', //用户输入方式
                name: 'name',
                message: 'your project name',
                default: this.appname //appname 为项目生成目录名称
            })
            .then(answer => {
                //执行结果 键:name 值:用户输入结果
                this.answer = answer
            })
    }
    writing() {

        //模版文件路径
        const templates = [
            'babel.config.js',
            'package-lock.json',
            'package.json',
            'postcss.config.js',
            'README.md',
            'vue.config.js',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/api/api.js',
            'src/assets/logo.png',
            'src/assets/css/theme.scss',
            'src/assets/css/variable.scss',
            'src/assets/images/hlpylogo.png',
            'src/axios/axios.js',
            'src/components/HelloWorld.vue',
            'src/components/test.vue',
            'src/lib/css/common.css',
            'src/lib/js/dialog.js',
            'src/lib/js/fixedInput.js',
            'src/lib/js/utils.js',
            'src/lib/js/validate.js',
            'src/router/activity.js',
            'src/router/index.js',
            'src/store/index.js',
            'src/store/base/index.js',
            'src/util/rem.js',
            'src/views/Home.vue',
            'src/views/activity/index.vue',
            '.browserslistrc',
            '.eslintrc.js',
            '.gitignore',
            '.env.dev',
            '.env.beta',
            '.env.prod',
        ]

        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answer
            )
        })
    }
}