// 下列代码输出什么？为什么？
function runAsync(x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function runReject(x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err))

//all方法是等待所有Promise都成功才会执行then方法，否则执行catch方法，但是其他方法一样会执行，只是结果被抛弃了。

/**
 * 结果：
 * 1秒后输出：
 * 1
 * 3
 * 2秒后输出：
 * 2
 * Error: 2
 * 4秒后输出：
 * 4
 */