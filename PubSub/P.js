function PubSub() {
    this.events = []
}
PubSub.prototype.subscribe = function(key, callback) {
    if(!this.events[key]) {
        this.events[key] = []
    }
    this.events[key].push(callback)
}
PubSub.prototype.unSubscribe = function(key, callback) {
    if(this.events[key]) {
        var i = this.events[key].findIndex(item => item == callback) 
        this.events[key].splice(i, 1)
    }
    if(this.events[key].length == 0) {
        delete this.events[key]
    }
}
PubSub.prototype.publish = function(key, ...args) {
    if(this.events[key]) {
        this.events[key].forEach(callback => {
            callback(...args)
        })
    }
}
PubSub.prototype.unSubscribeAll = function(key) {
    if(this.events[key]) {
        delete this.events[key]
    }
}

// 创建一个调度中心实例
window.EventCenter = new PubSub()
window.EventCenter.subscribe("jsload", function(p) {
    console.log(p)
})
// 可以在任意地方发布事件，订阅者都可以执行回调
window.EventCenter.publish("jsload", "loaded")