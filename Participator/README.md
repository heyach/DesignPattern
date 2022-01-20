### 设计模式 参与者模式
***
在特定的作用域中执行给定的函数，并将参数原封不动的传递

### bind，apply，call
改变函数执行的this
call和apply的第一个参数都是新的this
call的其余参数按顺序传递
fn.call(newthis, arg1, arg2, ...)
apply的其余参数以数组形式传递
fn.apply(newthis, [arg1, arg2, ...])
bind会返回一个新的函数，作用还是改变this
var newfn = fn.bind(newthis)
newfn(arg1, arg2, ...)
