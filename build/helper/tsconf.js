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
        "checkJs": true
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
let tsvue = {
    "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es3",
        "allowJs": true,
        "checkJs": true,
        "strict": true
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
