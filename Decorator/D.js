var i = document.getElementById("name")
i.onclick = function() {
    console.log("name点击逻辑")
}
// 如果直接添加新逻辑会覆盖掉原来的逻辑，或者不能保证执行时机
i.onclick = function() {
    console.log(this)
}
// 会执行所有的点击事件，但是不能保证打印在原来的逻辑之前
$("#name").on("click", function() {
    console.log(this)
})

// 因此要用装饰的方式加上功能
function decoratorClick(elm, fn) {
    var oldClick = elm.onclick
    elm.onclick = function() {
        fn()
        // 在原事件之前执行或之后执行都可以
        oldClick()
    }
}
decoratorClick(i ,function() {
    console.log(i)
})