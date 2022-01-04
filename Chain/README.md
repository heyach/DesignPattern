### 设计模式 链模式
***
通过在调用方法中将当前对象返回，可以实现对同一个对象的多个方法的链式调用

### 一句话
简化同一个对象的多次方法调用

### jQuery
```js
// $("#xxx").html("xxx")
// $("#xxx").css("color", "#fff")
// $("#xxx").attr("data", "xxx")
// $("#xxx").width(100)
// $("#xxx").height(100)
$("#xxx").html("xxx")
         .css("color", "#fff")
         .attr("data", "xxx")
         .width(100)
         .height(100)
```

### 思路
对象实例调用的任意一个方法都会返回当前对象