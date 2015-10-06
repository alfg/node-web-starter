/**
 * All global configuration.
 */

var config = {};
config.db = {};
config.db.connection = {};
config.auth = {};
config.app = {};

// Postgres connection.
config.db.debug = true;
config.db.client = 'sqlite3';
config.db.connection.filename = 'test.db';
config.db.connection.database = '';
config.db.connection.user = '';
config.db.connection.password = '';
config.db.connection.host = '';
config.db.connection.port = '';
config.db.pool = { min: 2, max: 10 };

// Application settings.
config.app.port = 3000;
config.app.allowedOrigins = [
    '*',
];

module.exports = config;
