/**
 * 思路：每个元素都换位一次，形成一个新的排列，递归处理剩下的元素， 比如[1, 2, 3]，先固定1，递归处理[2, 3]，再固定2，递归处理[1, 3]，依此类推, 
 * 但是要注意每次递归都要把元素换回来，避免在交换首位元素时发生混乱
 */

function permute(nums) {
  const res = []

  function backtrack(start) {
    if (start === nums.length - 1) {
      res.push([...nums])
      return
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]] // 交换元素
      backtrack(start + 1); // 递归处理剩下的元素
      [nums[start], nums[i]] = [nums[i], nums[start]] // 回溯nums
    }
  }

  backtrack(0)
  return res
}

const res = permute([1, 2, 3])
console.log("🚀 ~ 全排列.js ~ res:", res)