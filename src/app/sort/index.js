/**
 * @file 原生的 JavaScript 应用的入口文件
 * @author jamesjianpeng
 */
import CArray from '../helper/CArray.js';
import { selectionSort } from '../helper/selection-sort.js';
import { bubbleSort } from '../helper/bubble-sort.js';
import { insertionSort } from '../helper/insertion-sort.js';
import { shellSort, dynamicShellSort } from '../helper/shell-sort.js';

const test = function (randObj) {
    let selectionSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    console.log('%c 选择排序：', 'background: #7cb342; color: #fff;');
    let selectionSortObj = selectionSort.call(selectionSortList);
    console.log(selectionSortObj);

    let bubbleSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    console.log('%c 冒泡排序：', 'background: #7cb342; color: #fff;');
    let bubbleSortObj = bubbleSort.call(bubbleSortList);
    console.log(bubbleSortObj);

    let insertionSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    console.log('%c 插入排序：', 'background: #7cb342; color: #fff;');
    let insertionSortObj = insertionSort.call(insertionSortList);
    console.log(insertionSortObj);

    let shellSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    console.log('%c 固定间隔的希尔排序[11, 9, 7, 5, 3, 1]：', 'background: #26a69a; color: #fff;');
    let shellSortObj = shellSort.call(shellSortList);
    console.log(shellSortObj);

    let dynamicShellSortList = JSON.parse(JSON.stringify(randObj.dataStore));
    console.log('%c 动态间隔的希尔排序：', 'background: #26a69a; color: #fff;');
    let dynamicShellSortObje = dynamicShellSort.call(dynamicShellSortList);
    console.log(dynamicShellSortObje);

    console.log('%c 选择排序 是 动态间隔的希尔排序 的', 'background: #5e35b1; color: #fff;', Math.round(selectionSortObj.time / dynamicShellSortObje.time), '倍');
    console.log('%c 冒泡排序 是 动态间隔的希尔排序 的', 'background: #5e35b1; color: #fff;', Math.round(bubbleSortObj.time / dynamicShellSortObje.time), '倍');
    console.log('%c 插入排序 是 动态间隔的希尔排序 的', 'background: #5e35b1; color: #fff;', Math.round(insertionSortObj.time / dynamicShellSortObje.time), '倍');
    console.log('%c 固定间隔的希尔排序 是 动态间隔的希尔排序 的', 'background: #5e35b1; color: #fff;', Math.round(shellSortObj.time / dynamicShellSortObje.time), '倍');
};

let randList = new CArray(6);

for (let i = 0; i < randList.dataStore.length; i++) {
    var len = 100;
    let randSecondList = new CArray(len || randList.dataStore[i]);
    randSecondList.setData();
    test(randSecondList);
}