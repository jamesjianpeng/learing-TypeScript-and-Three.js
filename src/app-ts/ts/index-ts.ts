/**
 * @file TypeScript 应用的入口文件
 * @author jamesjianpeng
 */
import firstObj from './first.ts';
import './sort-maopao.ts';

console.log('hello webpack TypeScript ！！');

/** @type {String} */
let name:string = 'james';

/** @type {String} */
let greeting:string = 'hello';

console.log(firstObj.greeting(name, greeting, new Date().toString()));

/** ----------- 测试排序算法 ----------- */

const randomList = new CArray(100);
console.log(randomList);



