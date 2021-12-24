// 这个时候再定义模块，会把dom模块加到moduleCache里
R.module("lib/event", ["lib/dom"], function(dom) {
    return {
        on: function(id, type, fn) {
            dom.g(id)["on" + type] = fn
        }
    }
})