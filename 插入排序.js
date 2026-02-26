// 思路：插入排序的工作方式就像我们整理手中的扑克牌，左手拿着的牌是已排序的部分，右手从桌上拿新牌，然后插入已整理好的牌中的合适位置

function insertionSort(arr) {

  // 从第二个元素开始（索引1），因为第一个元素默认是已排序的
  for (let i = 1; i < arr.length; i++) {

    // 当前要插入的元素（从桌上拿起的牌）
    let cur = arr[i]

    // j 指向已排序部分的最后一个元素
    let j = i - 1

    // 在已排序部分中从后往前扫描，寻找插入位置
    while (j >= 0 && arr[j] > cur) {

      // 比 cur 大的元素向后移动一位
      arr[j + 1] = arr[j]
      j--
    }

    // 将 current 插入到正确位置
    arr[j + 1] = cur
  }
  return arr
}

const arr = insertionSort([3, 2, 1]) //1, 2, 3
console.log("🚀 ~ 插入排序.js ~ arr:", arr)