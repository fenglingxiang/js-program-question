// question：顺序执行10个异步任务
// 思路：利用for循环依次循环特性 + async/await 同步化异步任务实现

function task(i) {
  return new Promise(resolve => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      console.log(i)
      resolve()
    }, Math.random() * 1000);
  })
}

async function takeTask() {
  for (let i = 0; i < 10; i++) {
    await task(i)
  }
}

takeTask()