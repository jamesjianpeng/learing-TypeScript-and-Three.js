import CArray from '../../helper/CArray';
import { insertionSort } from '../../helper/insertion-sort.js';

let randomList = null;

document.write('插入排序');

console.log('insertion-sort');
randomList = new CArray(6);
randomList.setData();

insertionSort.call(randomList.dataStore);
console.log(randomList.toString());

insertionSort.call(randomList.dataStore, 'descend');
console.log(randomList.toString());