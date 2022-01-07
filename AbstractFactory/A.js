// 交通工具抽象类
function VehicleFactory(sub, sup) {
    function F() {}
    F.prototype = new VehicleFactory[sup]()
    sub.constructor = sub
    sub.prototype = new F()
}
// 定义多个产品簇，可扩展
// 小车抽象类
VehicleFactory.Car = function() {
    this.type = "car"
}
VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error("抽象方法不能调用")
    },
    getSpeed: function() {
        return new Error("抽象方法不能调用")
    }
}

// 货车抽象类
VehicleFactory.Trunk = function() {
    this.type = "trunk"
}
VehicleFactory.Trunk.prototype = {
    getPrice: function() {
        return new Error("抽象方法不能调用")
    },
    getSpeed: function() {
        return new Error("抽象方法不能调用")
    }
}

// 使用的时候需要具体的子类来实现抽象类，比如宝马小车
function BMW(price, speed) {
    this.price = price
    this.speed = speed
}
// BMW继承Car
VehicleFactory(BMW, "Car")
// 子类实现抽象类的抽象方法
// 注意，因为继承的时候把BMW的prototype指向了new Sup()，所以不能在直接这样重写BMW的prototype了，要一个个的定义
// BMW.prototype = {
//     getPrice: function() {
//         return this.price
//     },
//     getSpeed: function() {
//         return this.speed
//     }
// }
BMW.prototype.getPrice = function() {
    return this.price
}
BMW.prototype.getSpeed = function() {
    return this.speed
}

// 使用的时候需要具体的子类来实现抽象类，比如大货车
function BigCar(price, speed) {
    this.price = price
    this.speed = speed
}
// BMW继承Car
VehicleFactory(BigCar, "Trunk")
// 子类实现抽象类的抽象方法
BigCar.prototype.getPrice = function() {
    return this.price
}
BigCar.prototype.getSpeed = function() {
    return this.speed
}
var bmw = new BMW(10, 10)
var bigcar = new BigCar(20, 20)
console.log(bmw.type, bigcar.type)
// car trunk