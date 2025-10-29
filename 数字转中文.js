// question：实现数字转中文
// 思路：千分位以内的可以直接转数字加单位，但是到了万亿级别，又存在十万，百万，千万，所以将数字按千分位拆分转中文，然后拼接单位

function transNumberToChinese(num) {
  if (typeof num !== 'number') throw new TypeError('请传入数字')
  const unit = ["", "万", "亿", "万亿"]
  num = num.toString().split(".")
  let res = []
  const length = num[0].length
  for (let i = length; i > 0; i -= 4) {
    res.push(format(num[0].slice(Math.max(0, i - 4), i)))
  }
  for (let i = 0; i < res.length; i++) {
    res[i] += unit[i]
  }
  const decimal = num[1] ? formatDecimal(num[1]) : ""
  if (decimal) res.unshift(decimal)
  return res.reverse().join("")
}

function formatDecimal(num) {
  if (isNaN(Number(num))) throw new Error('请传入数字')
  num = num.toString()
  const numbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let res = ""
  for (let i = 0; i < num.length; i++) {
    res += numbers[num[i]]
  }
  return `点${res}`
}

function format(num) {
  if (isNaN(Number(num))) throw new Error('请传入数字')
  num = num.toString()
  const numbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const unit = ['', '十', '百', '千']
  const length = num.length
  let res = ""
  for (let i = 0; i < length; i++) {
    const value = num[i]
    if (value === '0') continue
    if (num[i - 1] === '0') res += numbers[0] //如果当前位非0，上一位是0，需要补零，读成零x
    res = res + numbers[value] + unit[length - 1 - i]
  }
  if (length === 2 && num[0] === '1') res = res.slice(1) //读数不存在一十的读法，所以一十的情况舍弃一
  return res
}

console.log(transNumberToChinese(1011010100.55)) //十亿一千一百零一万零一百点五五
