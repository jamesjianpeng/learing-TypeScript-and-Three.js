export default function CArray (numElements) {
    /**
     * @constructor
     * @param {Number} numElements
     */
    this.dataStore = [];
    this.numElements = numElements;
    this.toString = toString;
    this.setData = setData;
    this.swap = swap;
    var len = numElements;

    while (len--) {
        this.dataStore[len] = len;
    };
}

/**
 * 生成随机元素的列表，元素的数量就是 numElements
 */
function setData () {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = parseInt(Math.random() * this.numElements + 1);
    }
}

/**
 * 输出指定的数组中全部的元素，每 10 个自动换行
 */
function toString () {
    var len = this.numElements;
    var result = '';
    var i = 0;
    while (i < len) {
        result += this.dataStore[i] + ' ';
        if (((i + 1) % 10 === 0) && i > 0) result += '\n';
        i++;
    };
    return result;
};

/**
 * 输出指定的数组中全部的元素，每 10 个自动换行
 */
function toStringCurrency () {
    if (Object.prototype.toString.call(this) !== '[object Array]') throw new TypeError('this is not array');
    var len = this.length;
    var result = '';
    var i = 0;
    while (i < len) {
        result += this[i] + ' ';
        if (((i + 1) % 10 === 0) && i > 0) result += '\n';
        i++;
    };
    return result;
};

/**
 * 把后一个数和前一个数进行交换
 * @param {array} arr
 * @param {number} firstIndex
 * @param {number} secondIndex
 */
function swap (arr, firstIndex, secondIndex) {
    var temp;
    temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
};

/** #region default */
// randomList = new CArray(100);
// console.log(randomList.dataStore);
// console.log(randomList.toString());
/** #endregion */

export {
    swap,
    toStringCurrency
};