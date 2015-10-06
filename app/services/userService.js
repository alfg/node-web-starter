var cache = require('./cacheService');
var User = require('../models/user');


function UserService(req) {
    this.req = req;
    this.timeout = 60 * 15; // 15 Minutes.
}

UserService.prototype.getUsers = function(callback) {
    var self = this;
    var req = self.req;

    // Get or Set Cache.
	var cacheKey = 'users';
	cache.getOrSet(cacheKey, self.timeout, getUsers, function(data) {
		callback(data);
	});

	function getUsers(cb) {
    	new User()
    	.fetchAll()
    	.then(function(users) {
            cb(users);
    	});
    }
};

UserService.prototype.getUser = function(id, callback) {
    var self = this;

    // Get or Set Cache.
	var cacheKey = 'user_' + id;
	cache.getOrSet(cacheKey, self.timeout, getUser, function(data) {
		callback(data);
	});

	function getUser(cb) {
    	new User({ 'id': id })
    	.fetch({ // Eager loads nested relations.
    		require: true
    	})
    	.then(function(user) {
            cb(user, null);
    	})
    	.catch(function(e) {
    		console.log(e);
    		var err = {
    			status: 404,
    			message: 'Not found.',
    			error: JSON.stringify(e)
            };
            cb(err, e);
    	});
    }
};

UserService.prototype.createUser = function(callback) {
    var self = this;
    var req = this.req;

	new User({
		username: req.body.username,
	})
	.save()
	.then(function(model) {
        callback(model);

        // Flush cache.
        cache.flush();
	});
};

UserService.prototype.updateUser = function(id, callback) {
    var self = this;
    var req = this.req;

	new User({ 'id': id }).fetch()
	.then(function(user) {
		user.save({
			username: req.body.username || user.get('username'),
		}, {patch: true})
		.then(function(model) {
            callback(model, null);

            // Flush cache.
            cache.flush();
		});
	})
	.catch(function(e) {
		console.log(e);
		var err = {status: 404, message: 'Not found.'};
        callback(err, e);
	});
};

UserService.prototype.deleteUser = function(id, callback) {
    var self = this;

	new User({ 'id': id }).fetch()
	.then(function(user) {
		user.destroy()
		.then(function(model) {
            callback(model, null);

            // Flush cache.
            cache.flush();
		});
	})
	.catch(function(e) {
		console.log(e);
		var err = {status: 404, message: 'Not found.'};
        callback(err, e);
	});
};

module.exports = UserService;
