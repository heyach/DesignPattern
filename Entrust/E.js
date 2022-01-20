// 直接处理
var lis = document.getElementsByTagName("li")
for(var i = 0; i < lis.length; i++) {
    lis[i].onclick = function(e) {}
}

// 委托处理
var ul = document.getElementById("ul")
ul.onclick = function(e) {
    // 这一步还是要做的，与直接绑定事件相比
    if(e.target.nodeName == "li") {
        // 捕获阶段：先由文档的根节点document往事件触发对象，从外向内捕获事件对象；
        // 目标阶段：到达目标事件位置（事发地），触发事件；
        // 冒泡阶段：再从目标事件位置往文档的根节点方向回溯，从内向外冒泡事件对象。
        // 事件传递到子元素了
    }
}