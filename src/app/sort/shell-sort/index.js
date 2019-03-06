import CArray from '../../helper/CArray';
import { shellSort, dynamicShellSort } from '../../helper/shell-sort';

/** @type {array} */
let randomList = null;

/** @type {object} shellSort 函数返回的执行时间 */
let resultOne;
let resultTwo;
document.write('希尔排序');

randomList = new CArray(100);
randomList.setData();

resultOne = shellSort.call(JSON.parse(JSON.stringify(randomList.dataStore)));
console.log(resultOne.list);

resultTwo = dynamicShellSort.call(JSON.parse(JSON.stringify(randomList.dataStore)));
console.log(resultTwo.list);

// shellSort.call(randomList.dataStore, 'descend');
// console.log(randomList.toString());