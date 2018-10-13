import { swap } from './CArray.js';

/**
 * 冒泡排序
 * @function
 * @param {*}
 */
export const bubbleSort = function () {
    var list = this;
    var outer = list.length;
    var inner;
    var count = 1;
    for (; outer > 2; --outer) {
        for (inner = 0; inner <= (outer - 2); inner++) {
            count++;
            // console.log(list.toString(), '---->');
            if (list[inner] > list[inner + 1]) {
                swap(list, inner, inner + 1);
            }
            // console.log(list.toString(), count);
        }
    }
    console.log('冒泡排序两层循环比较次数', count);
};
