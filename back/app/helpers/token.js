const jsonwebtoken = require('jsonwebtoken');

module.exports = {

    generateAccessToken(lastname) {
        return jsonwebtoken.sign(lastname, process.env.TOKENSECRET, { expiresIn: '1800s' });
    },

};
