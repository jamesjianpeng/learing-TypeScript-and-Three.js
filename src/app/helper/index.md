### 冒泡，选择，插入排序的对比：
  - 冒泡排序每次操作都是针对确定的位置（索引），交换的元素不是确定的；找出最大或者最小值并与确定位置元素的数据交换
  - 选择排序每次操作都是针对确定的位置（索引），交换的元素不是确定的；找出最大或者最小值并与确定位置元素的数据交换
  - 插入排序每次操作没有确定的位置（索引），每次插入的元素是确定的；伴随这我们的判断条件去移动元素的位置，或插入指定的元素
  - 相同点：
    1. 都是采用排列组合思想的实现，都要采用两层循环，

### 运用的数学方法
  - 排列组合：并且内层循环的总次数 =（首项 + 尾项）* 项数 / 2
  