# Node Web Starter


## Development

### Requirements

* NodeJS v0.10+ - https://nodejs.org/download/
* sqlite3 - https://www.sqlite.org/download.html (development)

### Local Setup


Run the following commands:

```
git clone https://github.com/alfg/node-web-starter
cd node-web-starter
npm install
npm start
```

If you wish to enable auto-reload

```
npm install -g nodemon
nodemon server.js
```

To enable debug outputs, enable the following environment variable:

`set DEBUG=node-web-starter:server`


### New Database Setup

```
npm install -g knex
node ./scripts/schema.js
knex seed:run --knexfile scripts/knexfile.js
```

### Migrations

Knex Migrations are used for modifying the database schema and keeping track of
versioning through the `knex_migrations` table.

To start a new migration:

```
cd scripts
cp knexfiles/knexfile.sample.js > knexfile.js
knex migrate:make <migration_name>
```

This will create a new migration script under the migrations folder. Update the script
to run the SQL you would like to run. You can use the previous migrations as an
example template.

Once you're ready to execute the migration:
```
knex migrate:latest
```

You'll see the debug output and the `knex_migrations` table will then be updated and versioned.


### Resources

* http://expressjs.com/4x/api.html - NodeJS HTTP Framework
* http://bookshelfjs.org/ - ORM (Supporting SQLite3, PostgreSQL, MySQL, MariaDB)
* http://knexjs.org/ - SQL Schema/Query Builder via Knex.
