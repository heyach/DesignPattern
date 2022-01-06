function Factory(type, options) {
    // 将创建工作延迟到子类中
    if(this instanceof Factory) {
        return new this[type](options)
    } else {
        return new Factory(type, options)
    }
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
    // 扩展子类
}
var football = Factory("FootBall", {
    price: 10,
    quantity: 10,
    color: "red"
})
football.play()