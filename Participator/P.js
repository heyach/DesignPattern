function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype = {
    say: function(p1, p2) {
        console.log(this.name, p1, p2)
    }
}
var p = new Person("tom", 18)
p.say()

function Cat(name) {
    this.name = name
}
var c = new Cat("john")
p.say.call(c, "11", "22")
p.say.apply(c, ["33", "44"])
p.say.bind(c)("55", "66")
// tom undefined undefined
// john 11 22
// john 33 44
// john 55 66