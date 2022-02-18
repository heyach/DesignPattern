// 寄生式继承
function inheritPrototype(sub, sup) {
    function inheritObject(o) {
        function F() {}
        F.prototype = o
        return new F()
    }
    var p = inheritObject(sup.prototype)
    p.constructor = sub
    sub.prototype = p
}

function Sup(name) {
    this.name = name
    this.colors = "red"
}
Sup.prototype.getName = function() {
    console.log(this.name)
}
function Sub(name, time) {
    Sup.call(this, name)
    this.time = time
}
inheritPrototype(Sub, Sup)
Sub.prototype.getTime = function() {
    console.log(this.time)
}
var s1 = new Sub("s1", "2014")
var s2 = new Sub("s2", "2015")
console.log(s1 instanceof Sub)
console.log(s1 instanceof Sup)

// 表单组合虚拟类
function FormComposite() {
    // 所有子类都有的特权变量
    this.children = []
    this.element = null
}
FormComposite.prototype = {
    init: function() {},
    add: function() {},
    getElement: function() {},
}
function FormContainer(id, parent, className) {
    FormComposite.call(this)
    this.id = id
    this.parent = parent
    this.className = className
    this.init()
}
inheritPrototype(FormContainer, FormComposite)
FormContainer.prototype = {
    init: function() {
        this.element = document.createElement("ul")
        this.element.id = this.id
        this.element.className = this.className
    },
    add: function(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
        // 链式调用的关键
        return this
    },
    getElement: function() {
        return this.element
    },
    show: function() {
        this.parent.appendChild(this.element)
    }
}

function FormItem(className) {
    FormComposite.call(this)
    this.className = className
    this.init()
}
inheritPrototype(FormItem, FormComposite)
FormItem.prototype = {
    init: function() {
        this.element = document.createElement("li")
        this.element.className = this.className
    },
    add: function(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    },
    getElement: function() {
        return this.element
    },
}

function InputItem(className) {
    FormComposite.call(this)
    this.className = className
    this.init()
}
inheritPrototype(InputItem, FormComposite)
InputItem.prototype = {
    init: function() {
        this.element = document.createElement("input")
        this.element.className = this.className
    },
    add: function() {

    },
    getElement: function() {
        return this.element
    }
}

function LabelItem(text, className) {
    FormComposite.call(this)
    this.text = text
    this.className = className
    this.init()
}
inheritPrototype(LabelItem, FormComposite)
LabelItem.prototype = {
    init: function() {
        this.element = document.createElement("label")
        this.element.innerHTML = this.text
        this.element.className = this.className
    },
    add: function() {},
    getElement: function() {
        return this.element
    }
}

function SpanItem(text, className) {
    FormComposite.call(this)
    this.text = text
    this.className = className
    this.init()
}
inheritPrototype(SpanItem, FormComposite)
SpanItem.prototype = {
    init: function() {
        this.element = document.createElement("label")
        this.element.innerHTML = this.text
        this.element.className = this.className
    },
    add: function() {},
    getElement: function() {
        return this.element
    }
}

var form = new FormContainer("form", document.body)
form.add(
        new FormItem("form-item").add(
            new LabelItem("username", "username")
        ).add(
            new InputItem("input")
        ).add(
            new SpanItem("please input useramae", "span")
        )
    ).add(
        new FormItem("form-item").add(
            new LabelItem("pwd", "pwd")
        ).add(
            new InputItem("input")
        ).add(
            new SpanItem("please input pwd", "span")
        )
    ).show()


