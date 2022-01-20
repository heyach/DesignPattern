### 设计模式 简单模板模式
***
通过字符串模板创建视图，避免大量操作节点

### 应用场景
根据后端接口返回的数据，用js创建视图
```js
var container = document.createElement("div")
var h = document.createElement("h2")
var content = document.createElement("p")
var ul = document.createElement("ul")
var lis = []
for(var i = 0;i < data.length; i++) {
    lis.push(document.createElement("li"))
}
// ...
```
首先定义一个模板解析函数，把模板里`{#express#}`里替换成真正的值
```js
function formatString(str, data) {
    return str.replace(/\{#(\w+)#\}/g, function(match, key) {
        return typeof data[key] == undefined ? '' : data[key]
    })
}
```
然后定义一个简单的模板
```js
var tpl = `<h2>{#h2#}</h2>
           <p>{#p#}</p>
           <span>{#span#}</span>`
```
最后获取到最终的模板
```js
var h = formatString(tpl, data)
// "<h2>h2222</h2><p>p333</p><span>span444</span>"
// 这样可以直接根据获取到的视图一次性创建
document.createElement("div").innerHTML = h
```