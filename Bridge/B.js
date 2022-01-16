// 运动单元
function Speed(x, y) {
    this.x = x
    this.y = y
}
Speed.prototype = {
    run: function() {
        console.log("run")
    }
}

// 颜色类
function Color(c) {
    this.color = c
}
Color.prototype = {
    draw: function() {
        console.log("draw")
    }
}

function Speak(s) {
    this.word = s
}
Speak.prototype = {
    say: function() {
        console.log("say")
    }
}

// 最后一个people类，可以运动，说话，和肤色，通过桥接的方式完成联系
function People(name, speed, color, word) {
    this.name = name
    this.speed = new Speed(speed)
    this.color = new Color(color)
    this.speak = new Speak(word)
}
People.prototype = {
    getName: function() {
        return this.name
    },
    init: function() {
        this.speak.say()
        this.getName()
        this.color.draw()
        this.speed.run()
    }
}