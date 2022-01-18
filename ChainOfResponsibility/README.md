### 设计模式 职责链模式
***
解决请求的发送者和接受者的耦合，分解流程，实现一个请求在多个对象之间的传递，知道最后完成

### 一句话
将一个有顺序要求的流程分解为多个子流程，每个子流程都接受输入和输出，直到全部完成，如果有异步操作还要结合promise

### 场景
根据用户喜好构建首页推荐
1，请求用户喜好数据
getUserLikeType
2，根据喜好类型获取推荐
getRecommendByLikeType
3，根据推荐初始化数据（图文，视频等）
initRecommendComponent
4，最后用管道函数完成

### 管道函数
将一个函数的输出作为参数传递给下一个函数，区别于链式调用
```js
var a = new Counter()
a.add(5).add(6).add(8)
```
```js
function pipe() {}
function add5(x) {
    return x + 5
}
function add6(x) {
    return x + 6
}
pipe(add5, add6, initValue)
```

### 管道函数实现
管道函数接受多个函数和一个初始值，接下来按照顺序，前一个函数的输出会作为后一个函数的输入，最终返回整个结果
reduce函数提供了一个累加值，可以很好的完成这个参数传递的过程
扩展运算符...args则可以传递任意参数
```js
function pipe(...args) {
    args.reduce((p, fn) => {
        // fn(p)即为前一个函数的处理结果，把值传递给累加器p，这样后一个函数即能作为参数处理了
        return fn(p)
        // 如果有异步过程，要额外处理，把累加器设为一个promise对象
        // return p.then(fn)
    }, initValue)
}
```