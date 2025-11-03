// 实现一个获取类型的方法, 要求自定义的类实例化的对象返回定义的类名
// 思路：先通过Object.prototype.toString.call()获取类型，再判断是否Object类型，是的话返回构造函数名

function getDataType(data) {
  let dataType = data instanceof Element ? "Element" : Object.prototype.toString.call(data).replace(/\[object\s(.+)\]/, "$1")
  if (dataType === "Object") dataType = data.constructor.name
  return dataType
}