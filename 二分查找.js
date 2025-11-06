// 思路：二分查找是一种在有序数组中快速查找目标元素的算法，每次比较都将搜索范围缩小一半， 通过比较中间元素与目标值，决定继续在左半部分或右半部分搜索

function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let midIndex = Math.floor((start + end) / 2)
    let midValue = arr[midIndex]

    // 找到元素
    if (midValue === target) return midIndex

    // 元素在右半部分
    else if (midValue < target) start += 1

    // 元素在左半部分
    else end -= 1
  }

  return -1
}

const index = binarySearch([1, 2, 3, 4, 8, 10], 8)
console.log("🚀 ~ 二分查找.js ~ index:", index)
