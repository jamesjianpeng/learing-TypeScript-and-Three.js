import { swap } from './CArray.js';

/**
 * 选择排序
 * @function
 * @param {string} sortWay : access 升序 | descend 降序
 */
export const selectionSort = function (sortWay) {
    var list = this;

    /** @type {number} 数组的长度 */
    var len = list.length;

    /** @type {number} 第一层循环的索引 */
    var outer = 0;

    /** @type {number} 第二层循环的索引 */
    var inner;

    /** @type {number} 最深层循环的计数器 */
    var count = 1;

    /** @type {number} 函数执行时间 */
    var time = new Date().getTime();
    for (; outer < (len - 1); outer++) {
        for (inner = outer + 1; inner < len; inner++) {
            /** #region 降序 */
            // if (list[inner] > list[outer]) {
            //     this.swap(list, outer, inner);
            // }
            /** #endregion */

            /** #region 升序 */
            // if (list[inner] < list[outer]) {
            //     this.swap(list, outer, inner);
            // }
            /** #endregion */
            count++;
            if ((!sortWay || sortWay === 'access') && list[inner] < list[outer]) {
                /** 升序 */
                swap(list, outer, inner);
            } else if (sortWay === 'descend' && list[inner] > list[outer]) {
                /** 降序 */
                swap(list, outer, inner);
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