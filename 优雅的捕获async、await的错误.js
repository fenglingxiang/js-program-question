// 背景：正常情况下通过try...catch就可以捕获，但是如果很多个异步处理的情况下并且需要对不同错误做不同处理时，一个个try...catch显得很繁琐
/**
 思路：可以通过先Promise的then和catch方法来捕获异步操作的结果和错误，但是这样只能获取到一个结果，比如:
 const res = promise.then(res => res).catch(err => err) 
 这样就会导致数据和异常混淆，所以就需要每次都接收两个结果，可以用对象，也可以是数组，这里用数组
 const [res, err] = promise.then(res => [res, null]).catch(err => [null, err])
 这样只需要将这个获取结果的方法封装成统一处理的方法即可，每次调用传入Promise即可
 */

function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fn-data1')
    }, 1000)
  })
}

function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('fn-error2')
    }, 1000)
  })
}

function fn3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fn-data3')
    }, 1000)
  })
}

// 封装统一处理异步操作的结果
function handleDataAndError(promise) {
  return promise.then(res => [res, null]).catch(err => [null, err])
}

(async () => {
  const [res1, err1] = await handleDataAndError(fn1())
  const [res2, err2] = await handleDataAndError(fn2())
  const [res3, err3] = await handleDataAndError(fn3())

  console.log(res1, err1)
  console.log(res2, err2)
  console.log(res3, err3)
})()