### 设计模式 工厂模式
***
根据type来返回一个工厂，再用工厂来创建实例，这些工厂要提前放到总工厂里
```js
var FootballFactory = new Factory("football")
var football = FootballFactory(options)
var BasketballFactory = new Factory("basketball")
var basketball = BasketballFactory(options)
```

### 一句话
工厂里有生产多个产品的流水线，要创建什么产品直接给你对应的流水线，自己创建

### 与简单工厂模式的区别
简单工厂模式所有对象的创建方式都放到一个统一的工厂类，通过type来直接返回实例，但是如果要新增类，需要修改工厂代码，违反开闭原则
而工厂模式是根据type返回一个对应的工厂，然后由对应的工厂创建实例，实例化的时机延迟到具体的工厂里了，而且新增和修改具体某个工厂都不会再去修改总工厂类

### 安全模式类
js中的类和函数外观上是一样的，但是调用的时候有new关键字的区别
```js
function Person(options) {
    this.options = options
}
function Add(x, y) {
    return x + y
}
var p = new Person("x")
var c = Add(x, y)
```
这样很可能出现直接调用person的情况，所以要在Person的构造函数里做一次判断
```js
function Person(options) {
    // 如果通过new关键字调用的，this是指向Person
    if(!(this instanceof Person)) {
        return new Person(options)    
    }
    this.options = options    
}
```