### 设计模式 等待者模式
***
通过监听整理多个异步请求，来触发未来的动作（回调）

### 一句话
把回调根据顺序管理起来，依次触发

### 应用场景
回调地狱
```js
request(a, res => {
    request(b, res => {
        request(c, res => {
            // ...
        })
    })
})
```

### 手动实现一个promise
1. 一个promise有三个状态，pending，fulfilled，rejected，且只能由pending->fulfilled或pending->rejected
2. 构造函数Promise的参数是一个函数，初始化的时候会立即执行,执行的时候会将promise的resolve和reject作为参数传递，自行根据异步结果来决定将promise的状态改成fulfilled还是rejected
```js
var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1s")
        resolve("1")
    }, 1000)
})
function Promise(fn) {
    function resolve() {}
    function reject() {}

    fn(resolve, reject)
    // 这样在fn里就能执行promise的函数，从而改变promise的状态
}
```
3. promise的回调以链式调用的方式，Promise的then里会根据pormise的状态来处理传入的参数，执行成功回调，失败回调，或者把函数放入回调队列
```js
p.then((resolveValue) => {
    console.log("resolveValue")
}, (rejectValue) => {
    console.log("rejectValue") 
})
.then(() => {}, () => {})
.then(() => {}, () => {})
.then(() => {}, () => {})
```
4. 通过在then里返回promise，来串联异步执行顺序
```js
p.then(() => {
    return new Promise(() => {
         // async 
    })
}).then(() => {
    return new Promise(() => {
        // async
    })
}).then(() => {
    // final thing
})
```
5. promise有一些静态函数，可以把非promise的值转换成promise，并设置状态
```js
Promise.resolve = function (parameter) {
    if (parameter instanceof Promise) {
        return parameter
    }
    return new Promise(function (resolve) {
        resolve(parameter)
    })
}
```