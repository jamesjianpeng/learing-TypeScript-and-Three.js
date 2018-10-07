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

const test = function (randObj) {
    let selectionSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    selectionSort.call(selectionSortList);
    // console.log('selection sort', selectionSortList.toString());

    let bubbleSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    bubbleSort.call(bubbleSortList);
    // console.log('bubble sort', bubbleSortList.toString());

    let insertionSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    insertionSort.call(insertionSortList);
    // console.log('insertion sort', insertionSortList.toString());
    console.log('==========');
};

let randList = new CArray(100);
randList.setData();
console.log(randList.toString());

for (let i = 0; i < randList.dataStore.length; i++) {
    let randSecondList = new CArray(randList.dataStore[i]);
    randSecondList.setData();
    console.log('数组的长度：', randList.dataStore[i]);
    test(randSecondList);
}
