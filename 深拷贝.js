
/**
 * 深拷贝思路：
 * 1. 处理基本数据类型直接返回
 * 2. 处理数组，复制数组每一项
 * 3. 处理对象， 复制对象全部属性
 * 4. 处理循环引用，使用WeakMap记录循环引用对象，避免无限循环
 * 5. 处理特殊对象，如Date，RegExp，Function，Symbol，Set，Map，WeakMap，WeakSet
 */
function deepClone(target, map = new WeakMap()) {
  if (typeof target !== "object" || target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (map.has(target)) return map.get(target) //解决循环引用，如果已经拷贝过了，直接使用就行
  let cloneTarget = new target.constructor() //保留原型链
  map.set(target, cloneTarget) //记录循环引用对象
  for (let key in target) {
    if (target.hasOwnProperty(key)) cloneTarget[key] = deepClone(target[key], map)
  }
  return cloneTarget
}
