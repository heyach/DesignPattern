var R = R || {}

// 定义模块管理器
var moduleCache = {}

// 完成module的状态更新和回调
function setModule(moduleName, params, callback) {
    var _module
    var fn
    if(moduleCache[moduleName]) {
        // 根据R.module逻辑，更新模块加载状态
        _module = moduleCache[moduleName]
        _module.status = "loaded"
        _module.exports = callback ? callback.apply(_module, params) : null
        while (fn = _module.onload.shift()) {
            fn(_module.exports)
        }
    } else {
        // 直接执行回调，因为已经没有依赖要加载了
        callback && callback.apply(null, params)
    }
}
// 加载模块，
function loadModule(moduleName, callback) {
    var _module
    if(moduleCache[moduleName]) {
        _module = moduleCache[moduleName]
        if(_module.status == "loaded") {
            // 加载好了直接执行回调
            setTimeout(() => {
                callback(_module.exports)
            }, 0);
        } else {
            // 如果模块还是没加载好，那么把回调加到该模块的回调队列里
            _module.onload.push(callback)
        }
    } else {
        // 设置模块初始状态
        moduleCache[moduleName] = {
            moduleName: moduleName,
            status: "loading",
            exports: null,
            onload: [callback]
        }
    }
    // 会触发多次加载重复js，要做map缓存处理
    loadScript(getUrl(moduleName))
}

// 转换依赖模块的路径 "lib/dom" => "lib/dom.js"
function getUrl(moduleName) {
    return String(moduleName).replace(/\.js$/g, "") + ".js"
}

// 根据src加载js
function loadScript(src) {
    var _script = document.createElement("script")
    _script.type = "text/JavaScript"
    _script.charset = "UTF-8"
    _script.async = true
    _script.src = src
    document.getElementsByTagName("head")[0].appendChild(_script)
}

// ***关于判断js文件加载完的机制***
// 在页面中使用R.module(["lib/event", "lib/dom"])时，会根据依赖项去loadModule
// 一开始moduleCache肯定时空的，不存在这两个模块，所以要把这两个模块加到moduleCache里，状态设为loading，并去loadScript
// 模块js加载好了之后，也会执行R.module和setModule，然后发现这2个模块在依赖项里，就把响应的状态设为loaded，并依次触发前面push进来的回调

// 用...扩展运算符转换arguments，将参数转换成数组结构
R.module = function (...args) {
    // var args = [].slice.call(arguments)

    // 根据定义，最后一个参数作为回调
    var callback = args.pop()
    // 根据定义，倒数第二个参数为依赖的模块deps
    var deps = (args.length && args[args.length - 1] instanceof Array) ? args.pop() : []
    // 根据定义，倒数第三个参数为定义模块的url
    // 如果deps为空，url有值，可以理解为定义模块 R.module("lib/dom", () => {})
    // 如果url为空，deps有值，可以理解为直接引用依赖模块开发 R.module(["lib/event", "lib/dom"], (evt, dom) => {})
    var url = args.length ? args.pop() : null
    var params = []
    var depsCount = 0
    // var i = 0
    var len
    if(len = deps.length) {
        for(let i = 0;i < len;i++) {
            depsCount++
            // 依次加载模块，设置回调，当dep加载完之后，执行模块定义的回调，这样才可以完成deps的计数，如果url有值，那么最后还需要完成url模块的定义
            loadModule(deps[i], function(mod) {
                params[i] = mod
                depsCount--
                if(depsCount == 0) {
                    setModule(url, params, callback)
                }
            })
        }
        // 用let定义i解决闭包问题
        // while (i < len) {
        //     (function(i) {
        //         depsCount++
        //         loadModule(deps[i], function(mod) {
        //             params[i] = mod
        //             depsCount--
        //             if(depsCount == 0) {
        //                 setModule(url, params, callback)
        //             }
        //         })
        //     })(i)
        //     i++
        // }
    } else {
        setModule(url, [], callback)
    }
}