// 对于定义模块来说，我理解是一定会有第一个模块不依赖于其他模块
// 按照这里的逻辑，会执行一遍回调函数，但是返回的值没有用
// + 是要执行的，因为有可能有其他逻辑，并不只是返回，比如返回的函数里要准备一些前置条件
R.module("lib/dom", function() {
    return {
        g: function(id) {
            return document.getElementById(id)
        },
        html: function(id, html) {
            if(html) {
                this.g(id).innerHTML = html
            } else {
                return this.g(id).innerHTML
            }
        }
    }
})