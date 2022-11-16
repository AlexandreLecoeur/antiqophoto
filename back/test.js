require('dotenv').config();
const client = require('./config/client');

(async () => {
    const resultOnebiographer = await client.query('SELECT * FROM "users" WHERE id = 1');
    console.log(resultOnebiographer.rows);
})();
