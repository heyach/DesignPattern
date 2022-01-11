// 分页，由于dom操作是很耗性能的，而每个节点的结构又都一样，所以根据pageSize提供几个dom作为享元共享，每次替换内容就操作这几个dom
function Flyweight(list, pageSize) {
    this.list = list
    this.pageSize = pageSize || 10
    this.current = 1
    
    this.elements = []
}
Flyweight.prototype = {
    init: function() {
        for(let i = 0;i < this.pageSize;i++) {
            var d = document.createElement("div")
            this.elements.push(d)
        }
    },
    show: function() {
        // 根据current显示内容，共享dom元素
        for(let i = this.current;i < this.current + this.pageSize;i++) {
            this.elements[i].innerHtml = this.list[i]
        }
    },
    nextPage: function() {
        this.current++
        this.show()
    },
    prevPage: function() {
        this.current--
        this.show()
    }
}
