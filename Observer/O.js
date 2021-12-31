// 观察者可以是任意对象，Teacher
// 提供一个更新回调即可
function Observer(cb) {
    this.cb =  cb
}
Observer.prototype.update = function(subject) {
    // 这个时候会收到最新的被观察者信息
    this.cb(subject)
}

// 被观察者可以是任何对象，Person，Student，Animal...
// 首先要建立一种观察手段，能检测到被观察者的状态变化，比如现实中的扫描仪，一直扫描你，掉了根头发也能扫出来那种
// 然后被观察者需要与观察者建立一种联系，即被观察者要把观察者实例存放起来
// 观察手段发现被观察者发生变化后，依次把最新的状态发给观察者，完成更新
// 被观察者也可以主动唤起观察者，但是没有任何必要
function Subject() {
    this.observerList = []
}
Subject.prototype.add = function(observer) {
    this.observerList.push(observer)
}
Subject.prototype.remove = function(observer) {
    this.observerList.splice(this.observerList.findIndex(item => item == observer), 1)
}
Subject.prototype.notify = function() {
    this.observerList.forEach(item => {
        // 把最新的状态传递出去
        item.update(this)
    })
}

var stu = new Subject()
stu.name = "zhangsan"

var teacher = new Observer(function(stu) {
    console.log(`${stu.name}你特么又上课说话，${stu.say}`)
})

// 建立观察关系
// 大多数时候这个关系还不太好建立，比如stu访问不到teacher，或者teacher很晚才创建
// vue中提供一种思路是被观察者永远都把一个能访问到的全局变量当做观察者实例添加，而在别的地方维护什么时候一个对象变成观察者
// 比如现在李四调过来当张三的老实，那么就把李四设成观察者 Subject.target = "lisi"
stu.add(teacher)

// 建立一种观察手段，全方位的观察stu，这里不实现
stu.say = "gogogo"
// stu的状态发生改变了，观察手段一定能观察到，触发通知
stu.notify()
// zhangsan你特么又上课说话，gogogo
