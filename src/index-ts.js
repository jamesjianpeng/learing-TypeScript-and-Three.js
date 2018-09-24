/**
 * @file TypeScript 应用的入口文件
 * @author jamesjianpeng
 */
import firstObj from './views/first.ts';

console.log('hello webpack dev ！！');
/**
 * @type {String}
 */
let name = 'james';

/**
 * @type {String}
 */
let greeting = 'hello';

greeting = 6666;
console.log(firstObj.greeting(name, greeting, new Date().toString()))
