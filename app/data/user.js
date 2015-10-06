var db = require('../db');

function UserDataService() {}

UserDataService.prototype.get = function(email, callback) {
    var self = this;

    console.log('running get');
    db.serialize(function() {
        db.get("SELECT * FROM user WHERE email = ? limit 1",
            email, callback);
    });
}

UserDataService.prototype.all = function(callback) {
    var self = this;

    db.serialize(function() {
        db.all("SELECT * FROM user", callback);
    });
}

UserDataService.prototype.create = function(obj, callback) {
    var self = this;

    db.serialize(function() {
        db.run("INSERT INTO user(email, interval) VALUES (?, ?, ?, ?)",
            obj.email, obj.interval, callback);
    });
}

UserDataService.prototype.update = function(obj, callback) {
    var self = this;

    db.serialize(function() {
        db.run("UPDATE user SET interval = ? WHERE email = ?",
            obj.interval, obj.email, callback);
    });
}

UserDataService.prototype.insertOrUpdate = function(obj, callback) {
    var self = this;

    db.serialize(function() {
        db.run("INSERT OR REPLACE INTO user(id, email, interval) VALUES ((SELECT id FROM user WHERE email = ?), ?, ?)",
            obj.email, obj.email, obj.interval, callback);
    });
}

module.exports = UserDataService;
