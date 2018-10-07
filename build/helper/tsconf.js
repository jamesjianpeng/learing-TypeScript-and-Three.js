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
        "module": "commonjs",
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
        "importHelpers": true,

        "experimentalDecorators": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        
        "noImplicitAny": true,
        "outDir": "./dist/",
        "target": "es3",
        "strict": true,
        "moduleResolution": "node", // 模块路径的解析采用 node 的模式
        "sourceMap": true,
        "module": "esNext", 
        /**
         * 使用这个配置 "module": "node" 在项目中使用 import()，  error： TS1323: Dynamic import is only supported when '--module' flag is 'commonjs' or 'esNext'. 
         *      解决方法："module": "esNext"
         *      原因：import() 不是 es2015 的内容，2018-9-28 它还在 stage-2 
         */
        "lib": [
            "dom",
            "dom.iterable",
            "scripthost",
            "esnext", // 或者 "es2015" 不使用 error： Cannot find global value 'Promise'.
            "dom" // 不使用 TS2304: Cannot find name 'document[console, ...]'.
        ]
    },
    "include": [
        "./src/app-ts-vue/**/*",
        "node_modules/vue-router/types/*.d.ts",
        "node_modules/vue/types/*.d.ts"
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
