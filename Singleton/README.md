### 设计模式 单例模式
***
保证一个类只有一个实例，并提供一个全局访问。即使后面再实例，也不会再重复创建

### 一句话
把创建的实例存起来，再创建就直接返回现有的，保证只有一个实例

### 思路
通过立即执行函数返回一个类，通过闭包保存实例，也可以用类的静态属性存放
```js
var instance = null
var Singleton = function() {
    this.useCount = 0
    if(instance) {
        return instance
    }
    return instance = this
}
```
```js
var Singleton = function() {
    this.useCount = 0
    if(Singleton.instance) {
        return Singleton.instance
    }
    return Singleton.instance = this
}
Singleton.instance = null
```