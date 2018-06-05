# wenwen ui
`wenwen-ui` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发移动端产品
[演示地址](https://bhaltair.github.io/wenwen-ui)

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 安装
```bash
npm install wenwen-ui --save
```

## 使用

```js
import wenwenUI from 'wenwen-ui' // 引入组件库
import 'wenwen-ui/dist/theme-default/index.css';
Vue.use(wenwenUI)
```

## 开发
```bash
git clone git@github.com:bhsaltair/wenwen-ui.git
cd wenwen-ui
npm install
npm run dev
# or run document development
npm run storybook

```

## TODO
- 发布tag： 需要编写脚本支持tag发布
- keyboard
- 数字输入框
- confirm
- tabbar
