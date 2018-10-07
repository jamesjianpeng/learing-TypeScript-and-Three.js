/**
 * @file 原生的 JavaScript 应用的入口文件
 * @author jamesjianpeng
 */
import firstObj from './first.js';
import CArray from './sort/helper/CArray.js';
import { selectionSort } from './sort/helper/selection-sort.js';
import { bubbleSort } from './sort/helper/bubble-sort.js';
import { insertionSort } from './sort/helper/insertion-sort.js';

console.log('hello webpack JavaScript ！！');
console.log(firstObj.greeting('james', 'hello', new Date().toString()));

let randList = new CArray(100);
randList.setData();
console.log(randList.toString());

let selectionSortList = JSON.parse(JSON.stringify(randList.dataStore));
selectionSort.call(selectionSortList);
console.log('selection sort', selectionSortList.toString());

let bubbleSortList = JSON.parse(JSON.stringify(randList.dataStore));
bubbleSort.call(bubbleSortList);
console.log('bubble sort', bubbleSortList.toString());

let insertionSortList = JSON.parse(JSON.stringify(randList.dataStore));
insertionSort.call(insertionSortList);
console.log('insertion sort', insertionSortList.toString());
