function g(selector) {
    if(selector.indexOf("#") != -1) {
        return document.getElementById(selector.slice(1))
    } else if(selector.indexOf(".") != -1) {
        return document.getElementsByClassName(selector.slice(1))
    }
}