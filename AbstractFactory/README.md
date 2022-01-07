### 设计模式 抽象工厂模式
***
建立一个统一的大工厂VehicleFactory，里面设计好多个产品簇（Car，Trunk），产品簇都是抽象类，由具体的子类（bmw，bigcar）完成实现
这样子类的类型或者一些通用属性可以直接继承自某个产品簇（抽象工厂）

### 一句话
一句话概括不出来=-=

### 抽象类
js并没有实现abstract关键字，不能直接创建抽象类（实际js里连类的概念都没），只能根据抽象类的概念来模拟
抽象类是一种声明不能使用的类，不能被实例化，包含抽象方法，由子类具体实现
```js
function AbstractClass() {}
AbstractClass.prototype = {
    getName: function() {
        return new Error("抽象方法不能调用，请在子类里具体实现")
    },
    getPrice: function() {
        return new Error("抽象方法不能调用，请在子类里具体实现")
    },
    // 
}
```