/**
 * @file 区分构建 ts 和 tsvue 应用的 tsconf 配置，两个配置的详细内容 ./tsconf.js
 * @author jamesjianpeng
 */
const fs = require('fs');
let conf = require('./tsconf.js'); // 这个文件下是两个配置对象

const fileName = 'tsconfig.json';
const path = `./${fileName}`;
const argv = Array.from(process.argv);
conf = JSON.stringify(conf[argv[2]]); // 关键点： 1. argv 这个数组的 第三个元素 起是我们传入的参数

fs.writeFileSync(path, conf); // 关键点: 2. 使用 fs.writeFileSync() 去把指定的内容写入到指定路径

/**
 *
 * 创建一个文件并写入内容
 *  writeFileSync(路径， 文件内容)
 *
 * 创建文件夹
 *  mkdirSync(路径)
 *
 */
