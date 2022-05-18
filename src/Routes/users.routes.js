const express = require('express');
const UsersController = require('../Controllers/users.controller');

const route = express();

route.get('/', UsersController.getUsers);

module.exports = route;
