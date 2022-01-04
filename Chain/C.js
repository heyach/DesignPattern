function Counter(n) {
    this.result = n;
}
Counter.prototype = {
    add: function(n) {
        this.result += n
        return this
    },
    reduce: function(n) {
        this.result -= n
        return this
    },
    ride: function(n) {
        this.result *= n
        return this
    },
    except: function(n) {
        this.result /= n
        return this
    },
    getResult: function() {
        return this.result
    }
}
var c = new Counter(10)
console.log(
    c.add(10)
     .reduce(5)
     .ride(8)
     .except(2)
     .getResult())
// 60