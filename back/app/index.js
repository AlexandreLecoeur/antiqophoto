const express = require('express');
const cors = require('cors');
const expressSession = require('express-session');
const router = require('../routers');

const app = express();

// Cors accept all
app.use(cors('*'));

app.use(express.json());
app.use(
    expressSession({
        resave: true,
        saveUninitialized: true,
        secret: 'antiqophoto',
    }),
);
app.use(router);

module.exports = app;
