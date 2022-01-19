// 基础弹出提示框
function Alert(data) {
    this.content = data.content
    this.title = data.title
    this.panel = document.createElement("div")
    this.contentNode = document.createElement("p")

    this.confirmBtn = document.createElement("button")
    this.cancelBtn = document.createElement("button")

    this.panel.className = "alert"
    this.confirmBtn.className = "btn-confirm"
    this.cancelBtn.className = "btn-cancel"

    this.contentNode.innerHTML = this.content

    this.confirm = data.confirm || function() {}
    this.cancel = data.cancel || function() {}
}
Alert.prototype = {
    init: function() {
        this.panel.appendChild(this.confirmBtn)
        this.panel.appendChild(this.cancelBtn)
        this.panel.appendChild(this.contentNode)

        document.body.appendChild(this.panel)

        this.bindEvent()
        this.show()
    },
    bindEvent: function() {
        this.confirmBtn.onclick = this.confirm
        this.cancelBtn.onclick = this.cancel
    },
    show: function(){
        this.panel.style.display = "block"
    },
    hide: function() {
        this.panel.style.display = "none"
    }
}

// 根据模板扩展
// 弹窗的展示方式为淡入淡出
function FadeAlert(data) {
    Alert.call(this, data)
}
FadeAlert.prototype = new Alert()
FadeAlert.prototype.show = function() {
    // fade panel
}
FadeAlert.prototype.hide = function() {
    // fadeout panel
}

// 划入划出展示
function SlideAlert(data) {
    Alert.call(this, data)
}
SlideAlert.prototype = new Alert()
SlideAlert.prototype.show = function() {
    // slide panel
}
SlideAlert.prototype.hide = function() {
    // slideout panel
}