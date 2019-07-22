# vue-cli3快速创建项目
## 全局安装/查看版本
```
npm install -g @vue/cli 或 yarn global add @vue/cli
vue -V
```

## 创建项目
```
vue create my-project

vuecli3是因为上一次记录过的cli3配置，第一次执行create是没有的
选择默认（default）还是手动（Manually），如果选择default，一路回车执行下去就行了

选择配置，看个人项目需求
注意，空格键是选中与取消，A键是全选
TypeScript 支持使用 TypeScript 书写源码
Progressive Web App (PWA) Support PWA 支持。
Router 支持 vue-router 。
Vuex 支持 vuex 。
CSS Pre-processors 支持 CSS 预处理器。
Linter / Formatter 支持代码风格检查和格式化。
Unit Testing 支持单元测试。
E2E Testing 支持 E2E 测试。


配置文件存放地方
第一个是独立文件夹位置，第二个是在package.json文件里

询问是否记录这一次的配置，以便下次使用，如一开始的时候会显示的vuecli3配置

回车确定等待下载
```

## 启动
```
cd my-project // 进入到项目根目录
npm run serve // 启动项目

配置浏览器自动打开
"serve": "vue-cli-service serve --open"
```

## 使用旧版本的 vue init 功能
```
npm install -g @vue/cli-init
vue init webpack my-project
```
