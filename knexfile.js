// Update with your config settings.

module.exports = {
    development: {
        client: "mysql",
        connection: process.env.CONNECTION,
        migrations: {
            directory: __dirname + "/knex/migrations",
        },
    },
    production: {
        client: "mysql",
        connection: process.env.CONNECTION,
    },
};