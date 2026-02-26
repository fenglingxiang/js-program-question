/**
 * 设计一个函数，判断给定的数据集各字段是否存在全组合关系。
 * 全组合关系指的是数据集中每个字段的每个值都与其他字段的每个值组合出现过。
 * 例如，数据集 [{A: 1, B: 'x'}, {A: 1, B: 'y'}, {A: 2, B: 'x'}, {A: 2, B: 'y'}] 存在全组合关系，
 */

function isFullCombination(datas) {
  if(!datas.length) return false

  const keys = Object.keys(datas[0])
  const fieldMap = new Map(keys.map(key => [key, new Set()]))
  const objSerialized = new Set() //序列化后的对象字符串集合
  const valueMap = new Map() //每个字段值对应的映射关系，保证值唯一性
  let index = 1 //映射值的起始值

  // 收集每个字段的所有唯一值
  for(let data of datas) {
    let serializer = ''
    for(let key of keys) {
      let value = data[key]
      if(!valueMap.get(value)) {
        valueMap.set(value, index++)
      }
      fieldMap.get(key).add(value)
      serializer += '-' + valueMap.get(value) //使用映射值进行序列化，保证唯一性
      console.log("🚀 ~ 全组合判断.js ~ isFullCombination ~ serializer:", serializer)
    }
    if(objSerialized.has(serializer)) return false //如果序列化后的字符串已经存在，说明有重复的对象，不满足全组合关系
    objSerialized.add(serializer)
    console.log("🚀 ~ 全组合判断.js ~ isFullCombination ~ objSerialized:", objSerialized)
  }
  console.log("🚀 ~ 全组合判断.js ~ isFullCombination ~ fieldMap:", fieldMap)

  // 计算全组合的数量
  const n1 = [...fieldMap.keys()].reduce((total, field) => total * fieldMap.get(field).size, 1)

  return n1 === datas.length
}

const datas = [
  {
    A: 1,
    B: 'x',
  },
  {
    A: 1,
    B: 'y',
  },
  {
    A: 2,
    B: 'x',
  },
  {
    A: 2,
    B: 'y',
  },
]

console.log(isFullCombination(datas))