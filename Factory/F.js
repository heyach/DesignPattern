function Factory(type) {
    // 将创建工作延迟到子类中，这里直接返回对应的工厂，这里关联关系用原型处理，也可以用继承
    return this[type]
}
Factory.prototype = {
    FootBall: function(options) {
        var o = new Object()
        o.price = options.price
        o.quantity = options.quantity
        o.color = options.color
        o.type = "football"
        o.personnum = 22
        o.play = function() {
            console.log("用脚踢")
        } 
        return o
    },
    BasketBall: function(options) {
        var o = new Object()
        o.price = options.price
        o.quantity = options.quantity
        o.color = options.color
        o.type = "basketball"
        o.personnum = 10
        o.play = function() {
            console.log("用脚踢")
        } 
        return o
    }
    // 扩展工厂
}

var FootballFactory = new Factory("FootBall")
var football = FootballFactory({
    price: 10,
    quantity: 20,
    color: "red"
})
football.play()
// 用脚踢