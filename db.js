/** Database config for database. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

let db = new Client({
    host: 'localhost',
    user: 'ryanb',
    password: '*********',
    database: DB_URI
});

db.connect();


module.exports = db;
