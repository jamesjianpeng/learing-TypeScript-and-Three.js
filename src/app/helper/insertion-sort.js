/**
 * 插入排序
 * @function
 * @param {string} sortWay : access 升序 | descend 降序
 */
export const insertionSort = function (sortWay) {
    var list = this;

    /** @type {number} 数组的长度 */
    var len = list.length;

    /** @type {number} 第一层循环的索引 */
    var outer = 1;

    /** @type {number} 第二层循环的索引 */
    var inner;

    /** @type {number} 临时储存固定对比的元素 */
    var temp;

    /** @type {number} 最深层循环的计数器 */
    var count = 1;

    /** @type {number} 函数执行时间 */
    var time = new Date().getTime();

    for (; outer < len; ++outer) {
        temp = list[outer];
        inner = outer;
        while (inner > 0 && (/** 排序方式 */
            sortWay === 'access' || !sortWay ? list[inner - 1] > temp : list[inner - 1] < temp)
        ) {
            count++;
            list[inner] = list[inner - 1];
            inner--;
        }
        list[inner] = temp;
    }

    time = new Date().getTime() - time;

    return {
        time,
        count,
        list
    };
};