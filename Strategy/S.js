function FormInputValidate() {
    var strategy = {
        // 非空
        notNull: function(value) {
            return /\s+/.test(value) ? "not null" : ''
        },
        isPhone: function(value) {
            return /^1[3456789]\d{9}$/.test(value) ? '' : 'not phone'
        }
        // 
    }
    return {
        check: function(type, value) {
            return strategy[type](value)
        },
        addStrategy(type, fn) {
            strategy[type] = fn
        }
    }
}
// 跟util很像，多个添加能力
var v = new FormInputValidate()
v.check("isPhone", "123")