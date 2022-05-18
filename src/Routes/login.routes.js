const express = require('express');
const LoginController = require('../Controllers/login.controller');
const { validateLogin } = require('../Middlewares/login.middleware');


const route = express();

route.post('/', validateLogin, LoginController.createLogin);

module.exports = route;
