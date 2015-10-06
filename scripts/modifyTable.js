/**
 * Use this to modify table data.
 * Run: 'node modifyTable.js' to build tables.
 *
 * Example:
 *      db.knex.schema.table('Video', function(t) {
 *          t.string('LongDescription', 5000).nullable();
 *      }).then(function(resp) {
 *          console.log(resp);
 *      });
 *
 */

 var config = require('../config');
 var knex = require('knex')(config.db);
 var db = require('bookshelf')(knex);
