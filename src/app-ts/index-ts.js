/**
 * @file TypeScript 应用的入口文件
 * @author jamesjianpeng
 */
import firstObj from './first.ts';

console.log('hello webpack TypeScript ！！');
/**
 * @type {String}
 */
let name = 'james';

/**
 * @type {String}
 */
let greeting = 'hello';

console.log(firstObj.greeting(name, greeting, new Date().toString()))
