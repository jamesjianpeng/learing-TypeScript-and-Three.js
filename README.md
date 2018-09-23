# learing-TypeScript-and-Three.js
学习 TypeScript 和 Three.js


### 一，初始化仓库和项目元数据

  - init git
  - init package
  - add [commitizen](https://github.com/commitizen/cz-cli)
  - add [.gitignore](https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc)

### 二，初步工程化，[github commit history](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/4e697c5162fd0c18fef9ce7b1b31a09c66ebb39a)

  - add package scripts
  1. 生产环境打包
```
  npm run build:prod
```

  - add webpack plugin
```
  npm i -D clean-webpack-plugin
  npm i -D  html-webpack-plugin
```

### 遇到的问题：
  - [使用 clean-webpack-plugin dist 文件无法清除](https://github.com/johnagan/clean-webpack-plugin/issues/10)
  - 解决之后的配置：
```js
  ...
    new CleanWebpackPlugin('dist', {
        root: process.cwd(), // 关键点
        verbose: true,
        dry: false
    }),
  ...
```
  root 这个配置必须要，除了这种方法外还可以通过 在终端输入 pwd 获得 webpack 对应配置的路径，然后 copy 到 root 的位置，但是这个这个方法不够灵活每个人项目存放的路径对于工程搭建者是未知的，使用 process.cwd() 是最优的方法

### 三，初始化本地开发环境

  - add package scripts
  1.本第开发环境
```
  npm run build:local
```

  - add webpack plugin
```
  npm i -D webpack-dev-server
```
