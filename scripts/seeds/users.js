/**
 * Knex seedfile for populating sample data.
 * Run: 'knex seed:run' to insert seed data.
 * See: http://knexjs.org/#Migrations-CLI
 */


'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('user').del(),

    // Inserts seed entries
    knex('user').insert({
        username: 'test',
    })

  );
};
