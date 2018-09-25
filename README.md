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

    ```js
        /**
         * @file 本地开发环境下的关键配置
         * @author jamesjianpeng
         */
        const path = require('path');
        const webpack = require('webpack');
        const merge = require('webpack-merge');
        const baseConf = require('./webpack.base.conf');

        module.exports = (baseConf, {
            mode: 'development',
            devServer: {
                contentBase: path.resolve(__dirname, '../dist'), // 使用相对于 dev.conf 配置的绝对路径
                // contentBase: './dist', // 第二种方式 相对于 package.json 这一层
                hot: true,
                host: '0.0.0.0',
                open: true,
                port: 8099,
                overlay: true // 在浏览器端展示错误
            },
            module: {
                rules: [
                    {
                        test: /\.js/,
                        use: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ]
        });
    ```

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

### 六，使用 webpack 构建 Vue 应用

  - dev 脚本文件

    ```js
        /**
         * @file 本地开发环境下的 node 脚本，这种方式是通过命令行传参数
         * @author jamesjianpeng
         */
        const webpack = require('webpack');
        const merge = require('webpack-merge');
        const webpackDevServer = require('webpack-dev-server');
        let devConf = require('../webpack/webpack.dev.conf');
        const tsConf = require('../webpack/webpack.ts.conf');
        const vueConf = require('../webpack/webpack.vue.conf');

        const argv = Array.from(process.argv)

        /**  #region only compiler ts */
        if (argv.includes('ts')) {
            devConf = merge(devConf, tsConf)
        }
        /**  #endregion */

        /**  #region only compiler vue */
        if (argv.includes('vue')) {
            devConf = merge(devConf, vueConf)
        }
        /**  #endregion */

        webpackDevServer.addDevServerEntrypoints(devConf, devConf.devServer);
        const compiler = webpack(devConf);
        new webpackDevServer(compiler, devConf.devServer)
          .listen(devConf.devServer.port);

    ```
  - build 脚本文件

    ```js
        /**
         * @file 生产环境下的配置
         * @author jamesjianpeng
         */
        const path = require('path');
        const webpack = require('webpack');
        const merge = require('webpack-merge');
        const tsConf = require('../webpack/webpack.ts.conf');
        let webpackConfig = require('../webpack/webpack.prod.conf');
        let vueConf = require('../webpack/webpack.vue.conf');


        /**  #region only compiler ts */
        const argv = Array.from(process.argv)
        if (argv.includes('ts')) {
            webpackConfig = merge(webpackConfig, tsConf)
        }
        /**  #endregion */
        /**  #region only compiler vue */
        if (argv.includes('vue')) {
            webpackConfig = merge(webpackConfig, vueConf)
        }
        /**  #endregion */

        webpack(webpackConfig, function(err, stats) {
            if (err) throw err;
            if (stats.hasErrors()) {
                console.log(stats, 'has errors end');
            } else {
                console.log('webpack TypeScript and Threejs project finish!')
            }
        })

    ```

  - add webpack.vue.conf.js

    ```js
        /**
         * @file 构建 vue 应用 基础配置
         * @author jamesjianpeng
         */
        const path = require('path');
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        const CleanWebpackPlugin = require('clean-webpack-plugin');
        const VueLoaderPlugin = require('vue-loader/lib/plugin');

        module.exports = {
            mode: 'none',
            entry: {
                'main': path.resolve(__dirname, '../src/index-vue.js')
            },
            output: {
                path: path.resolve(__dirname, '../dist'),
                publicPath: './',
                filename: '[name].js'
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ]
            },
            plugins: [
                new VueLoaderPlugin()
            ]
        };

    ```

  - add webpack plugin

    ```
        npm i vue-loader -D
        npm i vue-loader -D
        npm i vue-style-loader -D
        npm i vue-template-compiler -D
        npm i css-loader -D
        npm i node-sass -D
        npm i sass-loader -D
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
