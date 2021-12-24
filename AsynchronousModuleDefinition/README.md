### 异步模块模式
***
在给定依赖模块加载完之后，执行回调逻辑

### 一句话
js文件中的代码执行到，表示该文件已经加载完成，而非监听文件的load状态
```js
// a.js
window.loadedModules.push("a")
// c.js
if(window.loadModules.includes("a")) {
    // a模块必定加载完成了
}
```

### 思路
1. 定义一个模块，和依赖的模块，在依赖模块加载完之后执行回调
```js
R.module("lib/event", ["lib/dom"], function(dom) {
    return {
        on: function(id, type, fn) {
            dom.g(id)["on" + type] = fn
        }
    }
})
```
2. R.module依次加载依赖模块，将回调函数添加到对应module的onload中，当module加载完成，依次执行onload的回调项
```js
for(let i = 0;i < len;i++) {
    loadModule(deps[i], function(mod){})
}

moduleCache[moduleName] = {
    moduleName: moduleName,
    status: "loading",
    exports: null,
    onload: [callback]
}
```
***因为最后使用的地方第一个定义模块的参数必定为空，那么当所有依赖项都加载完，需要直接执行回调***
```js
if(!moduleCache[moduleName]) {
    callback && callback.apply(null, params)
}
```
3. 把module加到moduleCache里，一开始肯定都是空的，然后加载script
```js
moduleCache[moduleName] = {
    moduleName: moduleName,
    status: "loading",
    exports: null,
    onload: [callback]
}
loadScript(getUrl(moduleName))
```
4. 此时浏览器默默的加载js文件，加载完成后就会执行执行，此时触发R.module，因为定义一个模块就是从这里开始的
4.1 简单情况，这个module不依赖其他模块，deps为空，直接进入定义模块，如果这个模块被其他模块依赖过，那么此时moduleCache里已经有记录了，完成loaded状态更改，依次触发onload里的回调，最后depsCount为0，执行自身的回调
```js
// 1
if(moduleCache[moduleName]) {
    _module = moduleCache[moduleName]
    _module.status = "loaded"
    _module.exports = callback ? callback.apply(_module, params) : null
    while (fn = _module.onload.shift()) {
        fn(_module.exports)
    }
} 
// 2
if(depsCount == 0) {
    setModule(url, params, callback)
}
// 3
callback && callback.apply(null, params)
// 4
dom.html("app", "success")
```
4.2 复杂情况，这个模块还依赖其他模块，那么重复进行上述加载依赖的过程，直至最后全部完成