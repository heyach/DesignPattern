function formatString(str, data) {
    return str.replace(/\{#(\w+)#\}/g, function(match, key) {
        return typeof data[key] == undefined ? '' : data[key]
    })
}
var tpl = `<h2>{#h2#}</h2><p>{#p#}</p><span>{#span#}</span>`
var data = {
    h2: "h2222",
    p: "p333",
    span: "span444"
}
var h = formatString(tpl, data)
// "<h2>h2222</h2><p>p333</p><span>span444</span>"
// 这样可以直接根据获取到的视图一次性创建