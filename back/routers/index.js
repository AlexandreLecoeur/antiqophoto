const express = require('express');
const controller = require('../app/controllers');
// const token = require('../app/middlewares/token');

const router = express.Router();
router.post('/account/login', controller.authController.login);
router.post('/account/signup', controller.authController.signup);
// router.get('/logout', controller.authController.logout);

router.delete('/myAccount/deleteAccount', controller.userController.deleteAccount);
router.patch('/myAccount/:id', controller.userController.updateAccount);

module.exports = router;
