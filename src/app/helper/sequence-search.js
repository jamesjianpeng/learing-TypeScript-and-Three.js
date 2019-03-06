/**
 * @file 检索算法 - 顺序查找 - 是否存在某个元素
 * @author jamesjianpeng <jamesjianpeng@gmail.com>
 */

/**
 * 顺序查找，从前往后或者从后往前
 * @function
 * @param {array} list 被查找的数组
 * @param {number} num 查找的元素
 */
var sequenceSearchBefore = function (list, num) {
    /** @type {number} 循环的索引 */
    var index;

    /** @type {number} 循环的索引 */
    var result;

    /** @type {number} 循环的索引 */
    var len = list.length;

    /** @type {number} 最深层循环的次数 */
    var count = 0;

    /** @type {number} 执行时间 */
    var time = new Date().getTime();

    index = 0;
    do {
        if (list[index] === num) {
            result = index;
            break;
        }
        index++;
        count++;
    } while (index < len);

    time = new Date().getTime() - time;

    return {
        num,
        list,
        result,
        count,
        time
    };
};

/**
 * 顺序查找，从前往后或者从后往前
 * @function
 * @param {array} list 被查找的数组
 * @param {number} num 查找的元素
 */
var sequenceSearchAfter = function (list, num) {
    /** @type {number} 循环的索引 */
    var index;

    /** @type {number} 循环的索引 */
    var result;

    /** @type {number} 最深层循环的次数 */
    var count = 0;

    /** @type {number} 执行时间 */
    var time = new Date().getTime();

    index = list.length;
    while (index >= 0) {
        if (list[index] === num) {
            result = index;
            break;
        }
        index--;
        count++;
    }

    time = new Date().getTime() - time;

    return {
        num,
        list,
        result,
        count,
        time
    };
};

export {
    sequenceSearchBefore,
    sequenceSearchAfter
};