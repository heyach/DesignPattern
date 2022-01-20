function DAO(id, timeSign) {
    this.id = id
    this.timeSign = timeSign
    this.status = {
        sussess: 0,
        fail: 1,
        timeout: 2,
    }
}
DAO.prototype = {
    set: function(key, value, callback, time) {

    },
    get: function(key, callback) {

    },
    remove: function(key, callback) {
        
    } 
}