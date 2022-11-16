const validator = require('email-validator');
const bcrypt = require('bcrypt');
const models = require('../models');

module.exports = {

    async updateAccount(req, res) {
        const accountId = req.params.id;
        const {
            firstname, lastname, email, password, passwordConfirm,
        } = req.body;

        const updateAccount = await models.userDataMapper.findOne(accountId);

        if (updateAccount) {
            if (firstname) {
                updateAccount.firstname = firstname;
            }
            if (lastname) {
                updateAccount.lastname = lastname;
            }
            if (email) {
                updateAccount.email = email;
            }
            if (!validator.validate(email)) {
                throw new Error('Adresse email invalide');
            }
            const emailExist = await models.userDataMapper.findByEmail(email);
            if (emailExist) {
                throw new Error('L\'adresse email existe déjà');
            }

            if (password) {
                updateAccount.password = password;
            }
            if (passwordConfirm) {
                updateAccount.passwordConfirm = passwordConfirm;
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;

            // eslint-disable-next-line max-len
            const accountSaved = await models.userDataMapper.accountUpdate(accountId, updateAccount);
            res.json(accountSaved);
        }
    },

    async deleteAccount(req, res) {
        const { id } = req.body;
        const deletedUser = await models.userDataMapper.delete(id);
        res.json({ deletedUser });
    },

    async routetest(req, res) {
        res.send('hello');
    },

};
