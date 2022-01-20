### 设计模式 MVC
***
将一个功能分成3个层次，模型Model，识图View，控制Controller，各自负责不同的部分，完成解耦

### 模型层Model
用来描述页面的数据来源，比如list，user，所有数据的操作更新都在这里处理，暂时不用管页面的更新
```js
function Model() {
    var M =  {}
    M.data = {}
    M.conf = {}
    return {
        getData: function(m) {
            return M.data[m]
        },
        getConf: function(c) {
            return M.conf[c]
        },
        setData: function(m ,v) {
            M.data[m] = v
            return this
        },
        setConf: function(c, v) {
            M.conf[c] = v
            return this
        }
    }
}
```

### 视图层View
根据模型层数据创建出视图对象
```js
var m = new Model()
// ...
function View() {
    var V = {}
    return function(v) {
        // 根据视图名称返回视图，比如用户信息，根据model里的user对象，是可以得到一个在页面上显示的user组件的
        V[v]()
    } 
}
```

### 控制层
给视图的交互方法