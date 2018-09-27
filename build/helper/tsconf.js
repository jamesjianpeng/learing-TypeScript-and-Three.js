/**
 * @file 存放 ts 和 tsvue 的配置
 * @todo 后续还有 tsreact 的配置也要放进来
 * @author jamesjianpeng
 */

// onlyts 的脚本生成的 tsconf.json
let ts = {
    "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es3",
        "allowJs": true,
        "checkJs": true,
        "moduleResolution": "node"
    },
    "include": [
        "./src/app-ts/**/*",
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
};

// onlytsvue 的脚本生成的 tsconf.json
// let tsvue = {
//     "compilerOptions": {
//         "noImplicitAny": true,
//         "outDir": "./dist/",
//         // 构建出 ES5 版本的 JavaScript，与 Vue 的浏览器支持保持一致
//         "target": "es3",
//         // 开启严格模式，这可以对 `this` 上的数据属性进行更严格的推断
//         "strict": true,
//         // 输出的 JavaScript 采用 es2015 模块化，使 Tree Shaking 生效
//         "module": "es6",
//         "moduleResolution": "node",
//         "allowJs": true, // 可以解析 .js
//         "checkJs": true,
//     },
//     "include": [
//         "./src/app-ts-vue/**/*",
//     ],
//     "exclude": [
//         "node_modules",
//         "**/*.spec.ts"
//     ]
// };

let tsvue = {
    "compilerOptions": {
        "noImplicitAny": true,
        "outDir": "./dist/",
        "target": "es3",
        "strict": true,
        "module": "es6",
        "moduleResolution": "node",
        "allowJs": true, // 可以解析 .js
        "checkJs": true,
    },
    "include": [
        "./src/app-ts-vue/**/*",
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
};

module.exports = {
    ts,
    tsvue
}
