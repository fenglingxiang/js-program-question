//LRU (Least Recently Used) 最近最少使用缓存算法，当缓存达到容量上限时，会优先淘汰最久未被访问的数据。

class LRUCache {
  constructor(maxCacheSize) {
    this.maxCacheSize = maxCacheSize;
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) return -1

    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    this.cache.set(key, value)
  }

  getCache() {
    return Array.from(this.cache.entries())
  }

  getSize() {
    return this.cache.size
  }

  clear() {
    this.cache.clear()
  }
}

const cache = new LRUCache(3)
cache.put('a', 1)
cache.put('b', 2)
cache.put('c', 3)

console.log(cache.getCache()) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(cache.get("a")) //1 => 'a',变成最近使用
console.log(cache.getCache()) //[ [ 'b', 2 ], [ 'c', 3 ], [ 'a', 1 ] ]
cache.put('d', 4) //删除最久未使用的，也就是cache的第一项 'b'
console.log(cache.getCache()) //[ [ 'c', 3 ], [ 'a', 1 ], [ 'd', 4 ] ]