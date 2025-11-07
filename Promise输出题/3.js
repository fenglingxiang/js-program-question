// 下列代码输出什么？

function runAsync(x) {
  const p = new Promise(r =>
    setTimeout(() => r(x, console.log(x)), 1000)
  );
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log("result: ", res))
  .catch(err => console.log(err));

// race方法是竞速，谁先完成就以谁的结果作为最终结果, 不论是成功还是失败，但是其他方法一样会执行，只是结果被抛弃了。

/**
 * 结果：
 * 0
 * Error: 0
 * 1
 * 2
 * 3
 */