import { swap } from './CArray.js';

/**
 * 选择排序
 * @function
 * @param {string} sortWay : access 升序 | descend 降序
 */
export const selectionSort = function (sortWay) {
    var list = this;
    var len = list.length;
    var outer = 0;
    var inner;
    var count = 1;
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
    console.log('选择排序两层遍历的次数', count);
};
