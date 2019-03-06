import CArray from '../../helper/CArray.js';
// import { sequenceSearchAfter } from '../../helper/sequence-search.js';
import { sequenceSearchAfter, sequenceSearchBefore } from '../../helper/sequence-search.js';

var randomList = new CArray(10000000);
randomList.setData();

var searchNum = 308;

var seqSearchResultA = sequenceSearchAfter(randomList.dataStore, searchNum);
console.log(seqSearchResultA, 'After');

var seqSearchResultB = sequenceSearchBefore(randomList.dataStore, searchNum);
console.log(seqSearchResultB, 'Before');