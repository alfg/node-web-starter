var db = require('../db');

var User = db.Model.extend({
    tableName: 'user',
    idAttribute: 'id'
});

module.exports = db.model('User', User);
