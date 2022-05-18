const express = require('express');
const LoginController = require('../Controllers/login.controller');


const route = express();

route.post('/', LoginController.createLogin);

module.exports = route;
