#!/usr/bin/env node

/*
 * imgpeer.
 * An image host powered by torrent.
 * Powered by NodeJS and Express.js.
 *
 * Copyright (c) 2015 Alfred Gutierrez alfg.co.
 *
 * Project home:
 *   https://github.com/alfg/imgpeer
 */

// Import application and set port.
var app = require('./app/app');
var config = require('./config');
var port = process.env.PORT || config.app.port; // set our port

// Start server.
app.listen(port);
console.log('starting on port ' + port);
