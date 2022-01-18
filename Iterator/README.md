### 设计模式 迭代器模式
***
不暴露对象内部结构，按顺序要求访问对象内部元素

### 一句话
提供一种访问对象的方式

### 示例
遍历数组
```js
for(let i = 0, len = arr.length;i < len; i++) {
    console.log(arr[i])
}
arr.forEach((item, index) => {
    console.log(item)
})
```