import CArray from '../helper/CArray';
import { selectionSort } from '../helper/selection-sort.js';

let randomList = null;

/** #region get random list */
console.log('selection-sort');
randomList = new CArray(6);
randomList.setData();

selectionSort.call(randomList.dataStore);
console.log(randomList.toString());

selectionSort.call(randomList.dataStore, 'descend');
console.log(randomList.toString());
/** #endregion */
