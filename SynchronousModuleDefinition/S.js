var S = {}
// 定义模块，简单来说就是
// S.xxx = fn
S.define = function(str, fn) {
    var parts = str.split(".")
    var old = parent = this
    var i = len = 0

    for(len = parts.length;i < len;i++) {
        if(typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {}
        }
        old = parent
        parent = parent[parts[i]]
    }
    if(fn) {
        old[parts[--i]] = fn()
    }
    return this
}
// 使用模块，简单来说就是根据参数从S上取到对应的模块，然后当做参数执行回调
S.module = function() {
    var args = [].slice.call(arguments)
    var fn = args.pop()
    var parts = args[0] && args[0] instanceof Array ? args[0] : args
    var modules = []
    var modIDs = ""
    var i = 0
    var ilen = parts.length
    var j 
    var jlen = 0
    var parent

    while (i < ilen) {
        if(typeof parts[i] == "string") {
            // 前面定义的模块都存放在S上了，需要根据参数从上面取值
            parent = this
            modIDs = parts[i].replace(/^F\./, '').split(".")
            
            // j每次都要从0开始
            for(j = 0, jlen = modIDs.length;j < jlen;j++) {
                parent = parent[modIDs[j]] || false
            }
            modules.push(parent)
        } else {
            modules.push(parts[i])
        }
        i++
    }
    fn.apply(null, modules)
}

S.define("string", function() {
    return {
        trim: function(str) {
            return str.replace(/^\s+|\s+$/, "")
        },
        upper: function(str) {
            return str.toLocaleUpperCase()
        }
    }
})

S.define("dom", function() {
    return {
        g: function(id) {
            return document.getElementsByTagName(id)
        },
    }
})

S.module(["string", "dom"], function(string, dom) {
    console.log(string.trim("  sa  "))
    console.log(dom.g("body"))
})