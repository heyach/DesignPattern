var mydom = (function() {
    var instance = null
    var Singleton = function() {
        this.useCount = 0
        // 用闭包来保存实例
        if(instance) {
            return instance
        }
        return instance = this
    }
    Singleton.prototype.g = function(id) {
        this.useCount++;
        return document.getElementById(id)
    }
    Singleton.prototype.html = function(id, str) {
        this.useCount++;
        this.g(id).innerHTML = str
    }
    return Singleton
})()
var mydom2 = (function() {
    var Singleton = function() {
        this.useCount = 0
        if(Singleton.instance) {
            return Singleton.instance
        }
        return Singleton.instance = this
    }
    // 用类静态属性保存实例
    Singleton.instance = null
    Singleton.prototype.g = function(id) {
        this.useCount++;
        return document.getElementById(id)
    }
    Singleton.prototype.html = function(id, str) {
        this.useCount++;
        this.g(id).innerHTML = str
    }
    return Singleton
})()