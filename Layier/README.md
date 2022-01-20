### 设计模式 惰性模式
*** 
减少代码里重复性的分支判断，重新定义对象来屏蔽分支判断

### 应用场景
在外观模式中，对浏览器兼容处理的时候，要通过判断来决定最终用哪种方式，但是这种应用很多，如果每次处理都要重复判断就很蠢的样子，
因此通过一次判断，然后把该处重新定义，后面每次就用定义的方式
比如事件监听，判断完环境后，就将on重新定义，后面每次就不用重复判断了
```js
function on(dom, type, fn) {
    if(on.isDefined) {
        // 已经重定义过了
        on(dom, type, fn)
    }
    if(dom.addEventListener) {
        on.isDefined = true
        on = function(dom, type, fn) {
            dom.addEventListener(type, fn ,false)
        }
    } else if(dom.attachEvent) {
        on.isDefined = true
        on = funtion(dom, type, fn) {
            dom.attachEvent("on" + type, fn)
        }
    }
}
```