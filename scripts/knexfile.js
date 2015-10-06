/**
 * Required Knex configuration file for database connection.
 * See: http://knexjs.org/#Seeds-CLI.
 */

module.exports = {

    debug: true,
    client: 'sqlite',
    connection: {
        filename: '../test.db',
        host: '',
        port: 5432,
        database: '',
        user:     '',
        password: ''
    },
    pool: {
        min: 0,
        max: 7
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
