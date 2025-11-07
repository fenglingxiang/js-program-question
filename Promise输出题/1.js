// 下列代码输出什么

const async1 = async () => {
  console.log('async1');
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 end')
  return 'async1 success'
}
console.log('script start');
async1().then(res => console.log(res));
console.log('script end');
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then(res => console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)

// 注意：
// async函数中await的new Promise要是没有返回值的话则不执行后面的内容
// Promise的then中如果不是函数则会被忽略，透传

/**
 * 结果：
 * 'script start'
  'async1'
  'promise1'
  'script end'
  1
  'timer2'
  'timer1'
 */