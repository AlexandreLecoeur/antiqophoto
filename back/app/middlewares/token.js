/* eslint-disable consistent-return */
require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jsonwebtoken.verify(token, process.env.JWTSECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        // 401 : unauthorized status
        res.sendStatus(401);
    }
};

module.exports = authToken;
