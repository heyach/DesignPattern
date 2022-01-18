var cacheData = {}
function getData(page) {
    if(cacheData[page]) {
        return cacheData[page]
    }
    return cacheData[page] = fetchData(page)
}
// vue源码中字符串处理函数
function cached(fn) {
    // 创建一个变量，用来存储已经处理过的字符串
    var cache = Object.create(null);
    return function cachedFn(str) {
        // 闭包cache
        var hit = cache[str];
        // 如果已经处理过，直接返回结果，否则进行转换，并缓存结果，以便下次使用
        return hit || (cache[str] = fn(str));
    };
}
var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});