
const interval = [5, 3, 1];

/**
 * 希尔排序
 * @function
 * @returns {Object} {time}
 */
const shellSort = function () {
    var list = this;

    /** @type {number} 间隔列表循环的索引 */
    var intervalIndex;

    /** @type {number} 第一层循环的索引 */
    var outer;

    /** @type {number} 第二层循环的索引 */
    var inner;

    /** @type {number} 临时储存固定对比的元素 */
    var temp;

    /** @type {number} 根据间隔动态计算的索引 */
    var intervalD;

    /** @type {number} 最深层的计数器 */
    var count = 1;

    /** @type {number} 函数执行时间 */
    var time = new Date().getTime();

    if (Object.prototype.toString.call(list) !== '[object Array]') return new TypeError('list not array');

    intervalIndex = 0;
    while (intervalIndex < interval.length) {
        /** 获得对比元素之间的间隔： interval[intervalIndex]，摒弃指定的间隔初始化起点：outer */
        outer = interval[intervalIndex];
        while (outer < list.length) {
            /** 缓存一次对比的元素 */
            temp = list[outer];

            /** 第二层循环索引的初始化 */
            inner = outer;
            intervalD = inner - interval[intervalIndex];
            while (inner >= interval[intervalIndex] && list[intervalD] > temp) {
                /** 以指定的间隔循环数组 */
                list[inner] = list[inner - interval[intervalIndex]];
                inner -= interval[intervalIndex];
                count++;
            }
            list[inner] = temp;
            outer++;
        }

        intervalIndex++;
    }

    time = new Date().getTime() - time;

    return {
        time,
        count
    };
};

export { shellSort };