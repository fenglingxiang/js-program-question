// 思路：不断地从未排序的部分中选择最小（或最大）的元素，将其放到已排序部分的末尾
function selectSort(arr) {

  // 外层循环：遍历每个位置，i 表示已排序部分的结束位置+1，也是未排序部分的开始位置
  for (let i = 0; i < arr.length - 1; i++) {

    // 假设当前未排序部分的第一个元素是最小的
    let minIndex = i

    // 内层循环：在未排序部分中寻找真正的最小元素
    for (let j = i + 1; j < arr.length; j++) {

      // 如果找到更小的元素，更新最小元素的索引
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    // 将找到的最小元素与未排序部分的第一个元素交换, 只在找到的最小元素不是当前位置时才交换，减少交换次数
    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

const arr = selectSort([3, 2, 1]) //1, 2, 3
console.log("🚀 ~ 选择排序.js ~ arr:", arr)
