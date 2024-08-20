require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PG_PORT || 5075;

const pg = require('knex')({
    client: 'pg',
    connection: {
    //   connectionString: config.DATABASE_URL,
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      ssl: process.env.PG_SSL ? { rejectUnauthorized: false } : false,
    },
  });

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
