/**
 * 插入排序
 * @function
 * @param {string} sortWay : access 升序 | descend 降序
 */
export const insertionSort = function (sortWay) {
    var list = this;
    var len = list.length;
    var outer = 1;
    var inner;
    var temp;
    var count = 1;
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
    console.log('插入排序两层循环的总次数：', count);
};
