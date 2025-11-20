// 节流：在一定时间间隔内重复触发只执行一次
// 常用场景：滚动事件监听、鼠标移动事件

// 方案一
function throttle(fn, wait) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait);
  }
}

// 方案二
function throttle(fn, wait) {
  let oldTime = Date.now()
  return function (...args) {
    let newTime = Date.now()
    if (newTime - oldTime < wait) return
    fn.apply(this, args)
    oldTime = Date.now()
  }
}