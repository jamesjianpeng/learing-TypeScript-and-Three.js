import CArray from '../helper/CArray';
import { bubbleSort } from '../helper/bubble-sort.js';

let randomList = null;

/** #region get random list */
console.log('bubble-sort');
randomList = new CArray(6);
randomList.setData();
console.log(randomList.toString());

bubbleSort.call(randomList.dataStore);
console.log(randomList.toString());
/** #endregion */
