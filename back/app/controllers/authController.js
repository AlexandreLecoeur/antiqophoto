const validator = require('email-validator');
const bcrypt = require('bcrypt');
const models = require('../models');
const addToken = require('../helpers/token');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Veuillez remplir les champs email et mot de passe');
        }

        const user = await models.userDataMapper.findByEmail(email);
        if (!user) {
            throw new Error('L\'adresse mail n\'existe pas');
        }

        const validatePassword = bcrypt.compare(password, user.password);

        if (!validatePassword) {
            throw new Error('Le mot de passe est incorrect');
        }

        req.session.user = user;
        const token = addToken.generateAccessToken({ lastname: user.lastname });
        res.json({
            token,
            user,
            logged: true,
        });
    },

    async signup(req, res) {
        const {
            firstname, lastname, email, password, passwordConfirm,
        } = req.body;
        if (!firstname || !lastname || !email || !password || !passwordConfirm) {
            throw new Error('Veuillez remplir tous les champs');
        }
        if (!validator.validate(email)) {
            throw new Error('Adresse email invalide');
        }
        const emailExist = await models.userDataMapper.findByEmail(email);
        if (emailExist) {
            throw new Error('L\'adresse email existe déjà');
        }

        if (password !== passwordConfirm) {
            throw new Error('Les mots de passe ne sont pas indentiques');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = await models.userDataMapper.createOneUser(req.body);
        res.json(user);
    },

    async routetest(req, res) {
        res.send('hello');
    },

};
