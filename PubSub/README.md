### 设计模式 发布订阅模式
***
发布订阅模式里有3个角色，发布者，订阅者，和事件调度中心，发布者和订阅者是互相解耦的 ，互不关心对方的存在，通信通过事件调度中心完成。而且消息的传递是单向的，即消息永远从发布者传递给订阅者

### 一句话
发布者通过一个key在事件调度中心发布事件，调度中心把消息传递给订阅了这个key的人

### 与观察者的区别
观察者模式是观察者直接观察目标对象，没有中介层。而发布订阅模式多了一个中介层，发布者和订阅者依赖于中介层，并不直接通信

### 优缺点
优点
* 发布者和订阅者高度解耦，借助调度中心完成事件发布和订阅，不用了解对方是谁
* 松散灵活度高，任何两个不同业务逻辑的模块都可以通过这个模式完成通信

缺点
* 发布者和订阅者是通过事件key来关联的，当key变多的时候难以维护，且没有办法保证唯一性，即注册的事件可能被覆盖

### 思路
1. 首先有一个调度中心，能根据key添加事件，**订阅者们**根据key订阅事件，并提供一个回调，当发布者触发事件后，调度中心根据订阅数组，依次执行订阅者的回调，传递信息
```js
function PubSub() {
    this.events = []
}
```
2. 调度中心要能够根据key发布事件，根据key分类存放订阅者
```js
PubSub.prototype.subscribe = function(key, callback) {
    if(!this.events[key]) {
        this.events[key] = []
    }
    this.events[key].push(callback)
}
```
3. 调度中心要能够根据key值和回调移除某个订阅
```js
PubSub.prototype.unSubscribe(key, callback) {
    if(this.events[key]) {
        this.events[key].splice(this.events[key].findIndex(item => item == callback))
    }
}
```
4. 调度中心要能触发事件，这个时候传递信息给订阅者
```js
PubSub.prototype.pubilsh = function(key, ...args) {
    this.events[key].forEach(callback => {
        callback(...args)
    })
}
```
5. 调度中心能根据key移除所有的订阅者，即删除这个事件
```js
PubSub.prototype.unSubscribeAll(key) {
    delete this.events[key]
}
```