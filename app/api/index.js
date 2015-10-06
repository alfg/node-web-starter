var express = require('express');
var config = require('../../config');
var cache = require('../cache');
var router = express.Router();

router.get('/', function(req, res) {
	res.json({ data: 'Hello World!'});
});

module.exports = router;
