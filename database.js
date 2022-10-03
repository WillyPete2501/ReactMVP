const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'krono',
    password: 'f',
    host: 'localhost',
    database: 'tododb',
    port: 5432
});

module.exports = pool;