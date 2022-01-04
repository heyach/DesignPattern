### 设计模式 组合模式
***
又称部分-整体模式，描述部分和整体的关系

### 一句话
准备一个整体和多个组成部分，根据实际结构完成拼装

### 思路
* 有一个整体对象/容器/父类
* 有多个组成部分，根据颗粒度还可以继续往下划分
* 组装的方法

### 表单
前端的表单需求是最常见的一种适用组合模式的场景，一个表单由多个子项（输入框，单选，多选，下拉框等）组成，往往这些子项都可以设计成独立复用的组件

一个表单对象可以有一个id，一个classname，父元素，子元素
以及初始化，添加子项，显示等方法
```js
function Form(id, className, parent, children) {
    this.id = id
    this.className = className
    this.parent = parent
    this.element = null
    this.children = children
    this.init()
}

FormContainer.prototype = {
    init: function() {
        this.element = document.createElement("form")
        this.element.id = this.id
        this.element.className = this.className
    },
    add: function(child) {
        this.children.push(child)
        this.element.appendChild(child)
        // 链式调用的关键
        return this
    },
    getElement: function() {
        return this.element
    },
    show: function() {
        this.parent.appendChild(this.element)
    }
}
```
而一个子项除了可以被添加之外，也可以是另外一部分子项的容器，所以子项也可以添加部分
```js
function Form(className) {
    this.element = null
    this.className = className
    this.init()
}

FormItem.prototype = {
    init: function() {
        this.element = document.createElement("div")
        this.element.className = this.className
    },
    add: function(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    },
    getElement: function() {
        return this.element
    },
}
```
接下来实现N个组成部分（LabelItem，InputItem，SpanItem，...）
通过组装完成最后的步骤
![](https://raw.githubusercontent.com/heyach/blog/main/images/designpattern/composite.jpg)
```js
var form = new FormContainer("form", document.body)
form.add(
        new FormItem("form-item").add(
            new LabelItem("username", "username")
        ).add(
            new InputItem("input")
        ).add(
            new SpanItem("please input useramae", "span")
        )
    ).add(
        new FormItem("form-item").add(
            new LabelItem("pwd", "pwd")
        ).add(
            new InputItem("input")
        ).add(
            new SpanItem("please input pwd", "span")
        )
    ).show()
```
