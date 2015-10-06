/**
 * Builds the database schema.
 * Run: 'node schema.js' to build tables.
 * Run: 'knex seed:run' to insert seed data.
 */

var config = require('../config');
var knex = require('knex')(config.db);
var db = require('bookshelf')(knex);


// USER ACCOUNT
// ===============================
db.knex.schema.createTable('user', function(t) {
    t.increments('id').primary();
    t.string('username', 100).nullable();
    t.timestamp('CreatedDate').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    t.timestamp('UpdatedDate').defaultTo(knex.raw('CURRENT_TIMESTAMP'));

}).then(function() {
    console.log('user table created.');
});



// REFERENCES/FKEYS
// ===============================
// ===============================
setTimeout(function() {
    console.log('Creating relationships');

}, 3000);
