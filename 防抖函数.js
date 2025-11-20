// 防抖：延迟执行函数，直到一定间隔内不再触发时才会执行函数
// 常用场景：输入框输入、窗口大小调整、表单验证

function debounce(fn, wait) {
  let timer

  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}