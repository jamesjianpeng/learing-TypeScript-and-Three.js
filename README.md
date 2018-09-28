# learing-TypeScript-and-Three.js
学习 TypeScript 和 Three.js
[彭涧的博客， www.pengjiandry.com](https://www.pengjiandry.com)

### 目录
  - 一，初始化仓库和项目元数据
  - 二，初步工程化，[github commit history](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/4e697c5162fd0c18fef9ce7b1b31a09c66ebb39a)
    - 遇到的问题
  - 三，初始化本地开发环境
  - 四，从 local-dve 和 prod-build 中抽离公共的 base conf
  - 五，[配置只解析和编译的.js 和 .ts 文件](https://webpack.js.org/guides/typescript/#src/components/Sidebar/Sidebar.jsx)
  - 六，[使用 webpack 构建 Vue 应用](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/7a9bbeccc7c6fe018ad543f4cc81173104a24d44)
  - 七，[使用 webpack 构建 TypeScript and Vue 应用](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/635417def4d32d115d50a5fbc014034591373f0b)


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
  1. 本地开发环境
  ```
    npm run build:local
  ```

  - add webpack plugin
  ```
    npm i -D webpack-dev-server
  ```

### 四，从 local-dve 和 prod-build 中抽离公共的 base conf

  - add webpack plugin

    ```
      npm i -D webpack-merge
    ```

  - add wepback.base.conf.js
    - 这个文件是把所有公共的配置写进来，在输入的 conf 中使用 webpack-merge 去合并 base.conf


### 五，[配置只解析和编译的.js 和 .ts 文件](https://webpack.js.org/guides/typescript/#src/components/Sidebar/Sidebar.jsx)

  - add package scripts

    1. 本地开发环境

    ```
      npm run build:local:onlyts
    ```

    2. 生产环境打包

    ```
      npm run build:prod:onlyts
    ```

  - add webpack plugin

    ```
      npm i -D ts-loader
      npm i -D typescript
    ```

  - add tsconfig.json [org](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)[other](https://ivweb.io/topic/5aa73bb35f0d763f33d74c6e)

    * 项目中的配置：

    ```json
      {
          "compilerOptions": {
              "outDir": "./dist/",
              "noImplicitAny": true,
              "module": "es6",
              "target": "es3",
              "allowJs": true,
              "checkJs": true
          },
          "include": [
              "./src/**/*"
          ],
          "exclude": [
              "node_modules",
              "**/*.spec.ts"
          ]
      }
    ```
    * 值得注意的地方就是：
      1. include 和 exclude 都需要指明不然会去查找 node_modules ，测试或其他文件
      2. checkJs 使用 true，在 .js 文件中也开启类型的静态检查


### 五，[配置只解析和编译 .js](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/76fdea91282a337829b059ef24898274e1603398)

  - modify webpack.dev.conf.js，其他的配置不变
    - add .babelrc

    ```
        {
            "plugins": ["@babel/plugin-syntax-dynamic-import"],
            "presets": [
                [
                    "@babel/preset-env", {
                        "modules": false,
                        "useBuiltIns": "usage"
                    }
                ]
            ]
        }
    ```

    - add webpack plugins，使用 [babel 7](https://babeljs.io/docs/en/v7-migration)

    ```
      npm i -D @babel-core
      npm i -D @babel/preset-env
      npm i -D @babel/plugin-syntax-dynamic-import
      npm i -D @babel-loader
    ```

    - add [.browserslistrc](https://github.com/browserslist/browserslist#queries)

    ```
      [production staging]
      > 1%
      ie 10
      Android >= 4.4
      iOS 8

      [development]
      last 1 chrome version
      last 1 firefox version
    ```

    * .browserslistrc 的作用就是告诉浏览器项目兼容的情况查询： https://browserl.ist/

### [六，使用 webpack 构建 Vue 应用](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/7a9bbeccc7c6fe018ad543f4cc81173104a24d44)

  - dev 脚本文件

    ```js
        ...
          const vueConf = require('../webpack/webpack.vue.conf');

          /**  #region only compiler vue */
          if (argv.includes('vue')) {
              devConf = merge(devConf, vueConf)
          }
          /**  #endregion */
        ...

    ```
  - build 脚本文件

    ```js
        ...
            let vueConf = require('../webpack/webpack.vue.conf');

            /**  #region only compiler vue */
            if (argv.includes('vue')) {
                webpackConfig = merge(webpackConfig, vueConf)
            }
            /**  #endregion */
        ...
    ```

  - add [webpack.vue.conf.js](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/7a9bbeccc7c6fe018ad543f4cc81173104a24d44)

  - add webpack plugin

    ```
        npm i vue-loader vue-loader vue-style-loader vue-template-compiler -D
        npm i css-loader node-sass sass-loader -D
    ```

  - add index-vue.js 入口文件
    ```js
        import Vue from 'vue'

        const createAppId = function() {
            const scriptTag = document.body.lastChild;
            const app = document.createElement('div');
            app.id = 'app';
            document.body.insertBefore(app, scriptTag);
            return '#' + app.id;
        };

        new Vue({
            el: createAppId(),
            render: (h) => h(App),
        });

    ```

### 七，[使用 webpack 构建 TypeScript and Vue 应用](https://github.com/jamesjianpeng/learing-TypeScript-and-Three.js/commit/635417def4d32d115d50a5fbc014034591373f0b)
  
  - 为什么开始使用 TypeScript 
    1. TypeScript 的静态检查可以起到一定避免出低级bug的问题，更好的集中在编码的逻辑上
    2. 接口规范（后续更新）

  - add package.json scripts
  - add webpack.ts.vue.conf.js
  - add src/app-ts-vue/**
  - add vue.shims.d.ts

    ```typescript
      declare module "*.vue" {
          import Vue from "vue"
          export default Vue
      }
    ```
  - modified tsconfig 
    ```json
      {
        "compilerOptions": {
            ...
            "moduleResolution": "node",
            ...
        },
      }
    ```
    - [解析策略试图在运行时模仿Node.js模块解析机制](https://typescript.bootcss.com/module-resolution.html)

  - 注意：
    1. *.d.ts 文件中的字符必须使用 "" 否则，在项目文件中 我们指定的文件后缀的文件会提示：Can't find this module
    2. 在 Vue 项目使用了 TypeScript 之后 babel 不能使用，会出现 errror（我在测试的时候用是有问题-@.@-）
    3. 在搭建工程时如果使用 html-webpack-plugin 这个插件记得在启动 dev 或 build 脚本中检查一下配置
