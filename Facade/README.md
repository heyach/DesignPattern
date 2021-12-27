### 设计模式 外观模式
***
为一组复杂的子系统接口提供一个更高级的统一接口，隐藏子系统的实现细节，使得外部系统可以更简单的访问子系统，减少了外部对子系统的依赖。

### 一句话
我只拿我想要的结果，至于怎么拿，我不关心。

### 举个栗子
在前端开发的时候，获取dom元素和绑定事件都是很常见的操作，但是由于浏览器兼容性的问题，有时候我们需要针对不同的浏览器做不同的处理，像绑定事件，老版本的IE就不支持addEventListener而要用attachEvent，如果有连addEventListener都不支持的浏览器，那就只能用onclick来绑定了。而对于dom元素，一般来说根据选择器（id，class，attribute，tag等）应该都能获取到，但是方法名却不一样（getElementById，getElementsByTagName，getElementsByClassName），对于我们开发者而言，这里其实是不太需要关注如何获取到dom的，所以如果有一个统一的方式能够完成这些要求就很方便了。

例如在使用jQuery的时候，我们可以`$(selector)`来获取dom，例如
```js
$("#container")
$(".username")
$("div")
$("[class=checked]")
```
也可以通过`on`来绑定事件，比如为ul下面的每个li标签绑定一个click事件
```js
$("ul").on("click", "li", liClick)
```