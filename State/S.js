var tree = {
    ischecked: false,
    isexpand: false,
    isdisabled: false,
    id: 10,
    parentid: 0,
    children: [{
        ischecked: false,
        isexpand: false,
        isdisabled: false,
        id: 1,
        parentid: 0,
        children: []
    }, {
        ischecked: false,
        isexpand: false,
        isdisabled: false,
        id: 2,
        parentid: 0,
        children: []
    }],
}
function checkNodeById(tree, id) {
    // 根据id勾选树的节点
}
function disableNodeById(tree, id) {
    // 根据id禁用树的节点
}
function getCheckedNodes(tree) {
    // 获取树已选中的节点
}
function getDisabledNodes(tree) {
    // 获取树被禁用的节点
}
function renderTreeInfo() {
    // 展示树的信息，可以自定义合并去除逻辑
}
// 勾选数据点的操作
function checkTreeNode() {
    checkNodeById(tree, 10)
    checkNodeById(tree, 1)
    checkNodeById(tree, 2)
    // ...
    renderTreeInfo()
}
// 禁用树节点的操作
function disableTreeNode() {
    disableNodeById(tree, 10)
    disableNodeById(tree, 2)
    // ...
    renderTreeInfo()
}
