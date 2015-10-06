var express = require('express');
var router = express.Router();
var UserService = require('../services/userService');


router.get('/', function(req, res) {
	var u = new UserService(req);
	u.getUsers(function(resp) {
		res.json(resp);
	});
});

router.get('/:id', function(req, res) {
	var id = req.params.id;

	var u = new UserService(req);
	u.getUser(id, function(resp, err) {
		if (err !== null) {
			res.json(resp);
		} else {
			res.json(resp);
		}
	});
});

router.post('/', function(req, res) {
	var u = new UserService(req);
	u.createUser(function(resp) {
		res.json(resp);
	});
});

router.put('/:id', function(req, res) {
	var id = req.params.id;

	var u = new UserService(req);
	u.updateUser(id, function(resp, err) {
		if (err !== null) {
			res.json(resp);
		}
		res.json(resp);
	});
});

router.delete('/:id', function(req, res) {
	var id = req.params.id;

	var u = new UserService(req);
	u.deleteUser(id, function(resp, err) {
		if (err !== null) {
			res.json(resp);
		}
		res.json(resp);
	});
});

module.exports = router;
