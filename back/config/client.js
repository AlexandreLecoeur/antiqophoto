const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL);

client.connect((error) => {
    if (error) {
        console.error('Une erreur a lieu à la connexion avec notre BDD : ', error.message);
    } else {
        console.log('Connection à la BDD réussie !');
    }
});

module.exports = client;
