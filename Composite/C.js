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
var News = function() {
    this.children = []
    this.element = null
}
News.prototype = {
    init: function() {},
    add: function() {},
    getElement: function() {},
}
function Container(id, parent) {
    News.call(this)
    this.id = id
    this.parent = parent
    this.init()
}
inheritPrototype(Container, News)
Container.prototype = {
    init: function() {
        this.element = document.createElement("ul")
        this.element.id = this.id
        this.element.className = "new-container"
    },
    add: function(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    },
    getElement: function() {
        return this.element
    },
    show: function() {
        this.parent.appendChild(this.element)
    }
}

function Item(className) {
    News.call(this)
    this.className = className
}
inheritPrototype(Item, News)
Item.prototype = {
    add: function(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    },
    getElement: function() {
        return this.element
    },
}

function NewsGroup(className) {
    News.call(NewsGroup)
    this.className = className
    this.init()
}
inheritPrototype(NewsGroup, News)
NewsGroup.prototype = {
    init: function() {
        this.element = document.createElement("div")
        this.element.className = this.className
    },
    add: function(child) {
        this.children.push(children)
        this.element.appendChild(child.getElement())
        return this
    },
    getElement: function() {
        return this.element
    }
}

function ImageNews(url, href, className) {
    News.call(this)
    this.url = url
    this.href = href
    this.className = className
    this.init()
}
inheritPrototype(ImageNews, News)
ImageNews.prototype = {
    init: function() {
        this.element = document.createElement("a")
        var img = new Image()
        img.src = this.url
        this.element.appendChild(img)
        this.element.className = "img-news"
        this.element.href = this.href
    },
    add: function() {

    },
    getElement: function() {
        return this.element
    }
}
var news1 = new Container("news", document.body)
news1.add(new Item("normol").add(new ImageNews("https://file.iviewui.com/dist/7dcf5af41fac2e4728549fa7e73d61c5.svg", "#", "small"))).show()
// function Sup(name) {
//     this.name = name
//     this.colors = "red"
// }
// Sup.prototype.getName = function() {
//     console.lgog(this.name)
// }
// function Sub(name, time) {
//     Sup.call(this, name)
//     this.time = time
// }
// inheritPrototype(Sub, Sup)
// Sub.prototype.getTime = function() {
//     console.log(this.time)
// }
// var s1 = new Sub("s1", "2014")
// var s2 = new Sub("s2", "2015")
// s1 instanceof Sub
// s1 instanceof Sup
