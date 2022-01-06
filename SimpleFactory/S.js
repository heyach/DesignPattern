function BallFactory(type, price, quantity, color) {
    // 一些共有属性
    var o = new Object()
    o.price = price
    o.quantity = quantity
    o.color = color

    // 根据type来决定创建哪个实例
    // 注意，这里只能创建工厂里已存在的对象

    switch (type) {
        case "football": 
            o.type = "football"
            o.personnum = 22
            o.play = function() {
                console.log("用脚踢")
            } 
            return o
        case "basketball": 
            o.type = "basketball"
            o.personnum = 10
            o.play = function() {
                console.log("用手投")
            } 
            return o
        default: 
            return o
    }
}
var football = BallFactory("football")
football.play()
var basketball = BallFactory("basketball")
basketball.play()