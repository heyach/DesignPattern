### 设计模式 工厂模式
***


### 一句话

### 与简单工厂模式的区别

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