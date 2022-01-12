// 后端返回数据
var res = {
    aaa: "tom",
    bbb: 20,
    ccc: "man"
}
// 前端在数据结构没拿到之前在页面上用的结构时
// {
//     name: "",
//     age: "",
//     sex: ""
// }
// 这个时候只要做一下适配就可以了
function Adapter(d) {
    return {
        name: d.aaa,
        age: d.bbb,
        sex: d.ccc
    }
}
var data = Adapter(res)