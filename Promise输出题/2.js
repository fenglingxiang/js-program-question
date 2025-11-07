// 下列代码输出什么

async function testSometing() {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSometing();
  // 任务1
  console.log(v1);
  const v2 = await testAsync();
  // 任务3
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise(resolve => {
  console.log("promise start...");
  resolve("promise");
});
// 任务2
promise.then(val => console.log(val));

console.log("test end...");

// 1. 执行同步代码，输出 "test start...""
/**
 * 2.
 * 执行testSometing函数，输出 "执行testSometing",
 * 返回 "testSometing",
 * 因为await后面的testSometing函数没有返回Promise，所以直接包装成Promise.revolve("testSometing"),
 * 后面代码全部丢进微任务队列, 标识为任务1
 */
// 3. 继续执行同步代码 var promise = new Promise..., 输出 "promise start...", 返回一个状态为resolved的Promise对象，后面代码丢进微任务队列，标识为任务2
// 4. 执行同步代码console.log("test end..."), 输出 "test end..."
/**
 * 5. 执行微任务队列，
 * 先执行任务1，console.log(v1), 输出 "testSometing"，
 * 执行testAsync函数，输出 "执行testAsync"，返回一个状态为resolved的Promise对象，
 * 后面代码丢进微任务队列，标识为任务3
 */
// 6. 执行任务2，.then(val => console.log(val)) 输出 "promise",
/**
 * 7. 执行任务3，console.log(v2), 输出 "hello async",
 * 执行console.log(v1, v2), 输出 "testSometing hello async"
 */