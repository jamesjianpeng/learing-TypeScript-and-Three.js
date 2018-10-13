import CArray from '../helper/CArray';
import { shellSort } from '../helper/shell-sort';

/** @type {array} */
let randomList = null;

/** @type {object} shellSort 函数返回的执行时间 */
let time;
document.write('希尔排序');

console.log('insertion-sort');
randomList = new CArray(10);
randomList.setData();

time = shellSort.call(randomList.dataStore);
console.log(randomList.toString(), time);

// shellSort.call(randomList.dataStore, 'descend');
// console.log(randomList.toString());