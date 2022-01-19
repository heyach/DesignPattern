// canvas绘图解耦context，防止被修改
function CanvasCommand() {
    var canvas = document.getElementById("canvas")
    var context = canvas.getContext("2d")

    var actions = {
        fillStyle: function(color) {
            context.fillStyle = color
        },
        fillText: function(text, x, y) {
            context.fillText(text, x, y)
        }
        //
    }

    return {
        excute: function(command) {
            if(command.length) {
                command.forEach(item => {
                    arguments.callee(item)
                })
            } else {
                actions[command.command].apply(actions, command.params)
            }
        }
    }
}
var c = new CanvasCommand()
// 为啥不用链式调用
c.excute([
    {
        command: "fillStyle",
        params: "red"
    },
    {
        command: "fillText",
        params: ['hello', 100, 100]
    }
])