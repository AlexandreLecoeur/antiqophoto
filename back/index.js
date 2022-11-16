require('dotenv').config();
const { createServer } = require('http');
const app = require('./app');

const port = process.env.PORT;
const server = createServer(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
