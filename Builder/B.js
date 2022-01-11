// 一个应聘者是一个复合对象（人，姓名-因为姓名有处理逻辑，职位等）
function Human(skill, hobby) {
    this.skill = skill || "保密"
    this.hobby = hobby || "保密"
}
Human.prototype = {
    getSkill: function() {
        return this.skill
    },
    getHobby: function() {
        return this.hobby
    }
}
function Name(name) {
    this.name = name
    this.firstName = this.getFirstName()
    this.lastName = this.getLastName()
}
Name.prototype = {
    changeName: function(name) {
        this.name = name
        this.getFirstName()
        this.getLastName()
    },
    getFirstName: function() {
        return this.name.slice(0, 1)
    },
    getLastName: function() {
        return this.name.slice(1)
    }
}
function Work(work) {
    switch (work) {
        case "code":
            this.work = "coder"
            this.desc = "talk is cheap, show me the code"
            break
        case "ui":
            this.work = "designer"
            this.desc = "i can draw colorful black"
            break
        case "teach":
            this.work = "teacher"
            this.desc = 'i am a teacher'
        default: 
            this.work = work
            this.desc = "sha ye bu shi"
    }
}
Work.prototype = {
    changeWork: function(work) {
        this.work = work
    },
    changeDesc: function(desc) {
        this.desc = desc
    }
}
// 建造一个复合对象
function Person(name, work) {
    var p = new Human()
    p.name = new Name(name)
    p.work = new Work(work)
    return p
}
var p = new Person("12", "code")
var p2 = new Person("34", "ui")
console.log(p, p2)