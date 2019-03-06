/**
 * 固定间隔的希尔排序
 * @function
 * @returns {Object} {time}
 */
const interval = [11, 9, 7, 5, 3, 1];

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

    /** @type {number} 最深层的计数器 */
    var count = 1;

    /** @type {number} 函数执行时间 */
    var time = new Date().getTime();

    if (Object.prototype.toString.call(list) !== '[object Array]') return new TypeError('list not array');

    intervalIndex = 0;
    while (intervalIndex < interval.length) {
        /** 获得对比元素之间的间隔： interval[intervalIndex]，并指定的间隔初始化起点：outer */
        outer = interval[intervalIndex];
        while (outer < list.length) {
            /** 缓存一次对比的元素 */
            temp = list[outer];

            /** 第二层循环索引的初始化 */
            inner = outer;

            while (inner >= interval[intervalIndex] && /** 关键点：inner - dynamicInterval */ list[inner - interval[intervalIndex]] > temp) {
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
        count,
        list
    };
};

/**
 * 动态间隔的希尔排序
 * @function
 * @returns {Object} {time}
 */

const dynamicShellSort = function () {
    var list = this;

    /** @type {number} 数组的长度 */
    var len = list.length;

    /** @type {number} 动态的间隔 */
    var dynamicInterval;

    /** @type {number} 第一层循环的索引 */
    var outer;

    /** @type {number} 第二层循环的索引 */
    var inner;

    /** @type {number} 临时储存固定对比的元素 */
    var temp;

    /** @type {number} 最深层的计数器 */
    var count = 1;

    /** @type {number} 函数执行时间 */
    var time = new Date().getTime();

    if (Object.prototype.toString.call(list) !== '[object Array]') return new TypeError('list not array');

    dynamicInterval = 1;

    /** #region 动态生成间隔 */
    while (dynamicInterval < (len / 3)) {
        dynamicInterval = len * 3 + 1;
    }
    /** #endregion 动态生成间隔 */

    while (dynamicInterval >= 1) {
        /** 并指定的间隔初始化起点：outer */
        outer = dynamicInterval;

        while (outer < len) {
            /** 缓存一次对比的元素 */
            temp = list[outer];

            /** 第二层循环索引的初始化 */
            inner = outer;
            while (inner >= dynamicInterval && /** 关键点 1：inner - dynamicInterval */ list[inner - dynamicInterval] > temp) {
                /** 以指定的间隔循环数组 */
                list[inner] = list[inner - dynamicInterval];
                inner -= dynamicInterval;
                count++;
            }
            list[inner] = temp;
            outer++;
        }

        dynamicInterval = Math.ceil((dynamicInterval - 1) / 3); /** 关键点 2: 必须使用向上取整，使用 parseInt 和 Math.floor 之后排序不准确 */
    }

    time = new Date().getTime() - time;

    return {
        time,
        count,
        list
    };
};

export { shellSort, dynamicShellSort };