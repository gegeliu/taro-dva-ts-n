# 脚手架

当前版本 2.0.3(与taro 版本保持一致)

当前依赖 npm install -g @tarojs/cli@2.0.3

命令行快速生成模板页面
npm tpl 'page-name'

自动从iconfont更新
npm icon 'iconfont下载链接后缀'

持续优化及维持最新依赖更新...

# 技术栈

React + Taro + Dva + Sass + typeScript

使用eslint+prettier格式化

默认git提交前校验（如不需要可在package.json里删掉pre-commit配置）


# 全局安装taro脚手架
npm install -g @tarojs/cli

# 项目依赖升级
cd taro-dva-ts-n

taro update project

# 如何更新所有依赖
npm install -g npm-check-updates

npm-check-updates -u

npm install

## 项目运行

```

cd taro-dva-ts-n

# 安装项目依赖
yarn
or
npm install

# 微信小程序
npm run dev:weapp

# 支付宝小程序
npm run dev:alipay

# 百度小程序
npm run dev:swan

# 字节跳动小程序
npm run dev:tt

# QQ小程序
npm run dev:qq

# H5
npm run dev:h5

# React Native
npm run dev:rn

# pages模版快速生成
npm run tpl `文件名`

```

# 业务介绍

目录结构

    ├── .temp                  // H5编译结果目录
    ├── .rn_temp               // RN编译结果目录
    ├── dist                   // 小程序编译结果目录
    ├── config                 // Taro配置目录
    │   ├── dev.js                 // 开发时配置
    │   ├── index.js               // 默认配置
    │   └── prod.js                // 打包时配置
    ├── src                    // 源码目录
    │   ├── components             // 组件
    │   ├── config                 // 项目开发配置
    │   ├── images                 // 图片文件
    │   ├── models                 // redux models
    │   ├── pages                  // 页面文件目录
    │   │   └── home
    │   │       ├── index.tsx       // 页面逻辑
    │   │       ├── index.scss     // 页面样式
    │   │       ├── model.ts       // 页面models
    │   │       └── service.ts     // 页面api
    │   ├── styles             // 样式文件
    │   ├── utils              // 常用工具类
    │   ├── app.tsx             // 入口文件
    │   └── index.html
    ├── package.json
    ├── template.js            // pages模版快速生成脚本,执行命令 npm run tpl `文件名`
    └── get-iconfont.js        // iconfont快速更新,执行命令 npm run iconfont

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

# 文档

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

> [Taro 更新日志](https://github.com/NervJS/taro/blob/2.x/CHANGELOG.md)

### dva开发文档地址

> https://dvajs.com/

### TypeScript 中文手册

> https://typescript.bootcss.com/

### 小程序开发文档

> https://mp.weixin.qq.com/debug/wxadoc/dev/

# License

[MIT](LICENSE)
