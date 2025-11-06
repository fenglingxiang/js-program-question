// 思路：找到数组中间值一分为二，递归排序子数组，然后将排序好的子数组跟中间值合并

function quickSort(arr) {
  if (arr.length < 2) return arr
  const midIndex = Math.floor(arr.length / 2)
  const midValue = arr.splice(midIndex, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midValue) left.push(arr[i])
    else right.push(arr[i])
  }
  return quickSort(left).concat([midValue], quickSort(right))
}

const arr = quickSort([3, 2, 1]) //1, 2, 3
console.log("🚀 ~ 快速排序.js ~ arr:", arr)