/**
 * Drops the database schema.
 * Run: 'node dropTables.js' to build tables.
 */

 var config = require('../config');
 var knex = require('knex')(config.db);
 var db = require('bookshelf')(knex);


 // DROP TABLES
 db.knex.raw('DROP TABLE "user" CASCADE').then(function(resp) {
     console.log(resp);
 });
