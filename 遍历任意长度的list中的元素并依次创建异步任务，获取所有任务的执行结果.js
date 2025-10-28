// question：遍历一个任意长度的list中的元素并依次创建异步任务，如何获取所有任务的执行结果？
// 思路：因为需要获取全部结果，无论成功失败，所以选择Promise.allSettled。如果使用Promise.all，那么只要有一个任务失败，那就只能获取到第一个失败的结果。
async function asyncTask(list) {
  const res = []
  list.forEach(item => {
    res.push(new Promise((resolve, reject) => reject(item)))
  })
  return Promise.allSettled(res).then(result => {
    return result
  })
}

asyncTask([1, 2, 3]).then(res => {
  console.log(res)
})