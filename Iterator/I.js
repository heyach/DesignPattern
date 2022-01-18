Array.prototype.eachArray = function(fn) {
    for(let i = 0; i < this.length; i++) {
        fn.call(this, this[i], i);
    }
};
var a = [1, 2, 3]
a.eachArray((item, index) => {
    console.log(item, index)
})
// 1 0
// 2 1
// 3 2