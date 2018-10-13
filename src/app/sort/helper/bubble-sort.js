import { swap } from './CArray.js';

/**
 * 冒泡排序
 * @function
 * @param {*}
 */
export const bubbleSort = function () {
    var list = this;

    /** @type {number} 第一层循环的索引 */
    var outer = list.length;

    /** @type {number} 第二层循环的索引 */
    var inner;

    /** @type {number} 最深层循环的计数器 */
    var count = 1;

    /** @type {number} 函数执行时间 */
    var time = new Date().getTime();

    for (; outer > 2; --outer) {
        for (inner = 0; inner <= (outer - 2); inner++) {
            count++;
            if (list[inner] > list[inner + 1]) {
                swap(list, inner, inner + 1);
            }
        }
    }

    time = new Date().getTime() - time;

    return {
        time,
        count,
        list
    };
};