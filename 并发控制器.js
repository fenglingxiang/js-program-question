// 思路：使用一个队列来存储任务，每次取出队列中的第一个任务执行（先进先出遵循添加任务顺序），执行完成后继续执行下一个任务，直到队列为空。

class ConcurrencyController {
  constructor(limit) {
    this.limit = limit; // 限制并发数
    this.queue = [] // 任务队列
    this.running = 0; // 当前运行的任务数
  }

  async run() {
    if (this.running >= this.limit || this.queue.length === 0) return // 达到并发限制或队列为空时不执行任务

    const { task, resolve, reject } = this.queue.shift() // 取出队列中的第一个任务
    this.running++ // 增加当前运行的任务数

    // 执行任务
    try {
      const res = await task()
      resolve(res) // 任务成功，调用resolve
    } catch (err) {
      reject(err)
    } finally {
      this.running-- // 任务完成，减少当前运行的任务数
      this.run() // 继续执行下一个任务
    }
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject }) // 将任务添加到队列中
      this.run() // 尝试运行任务
    })
  }
}

// 示例用法

// 创建异步任务模拟
const createAsyncTask = (name, duration) => {
  return () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name}完成`)
      resolve(name)
    }, duration)
  })
}
const time = 1000
const p1 = createAsyncTask("任务1", time)
const p2 = createAsyncTask("任务2", time)
const p3 = createAsyncTask("任务3", time)
const p4 = createAsyncTask("任务4", time)
const p5 = createAsyncTask("任务5", time)

const controller = new ConcurrencyController(2) // 限制同时运行2个任务
const tasks = [p1, p2, p3, p4, p5]

tasks.forEach((task) => {
  controller.addTask(task)
})