/**
 * Initialize database connection.
 */

var config = require('../config');
var knex = require('knex')(config.db);
var db = require('bookshelf')(knex);
db.plugin('virtuals');  // Load virtual attributes plugin.
db.plugin('registry');  // Load virtual attributes plugin.

module.exports = db;
