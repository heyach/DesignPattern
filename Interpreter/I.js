// 简单的父子结构解释器
var desc = []
function getPubSub(node) {
    desc.push(node.nodeName)
    if(node.parentNode) {
        getPubSub(node.parentNode)
    }
}