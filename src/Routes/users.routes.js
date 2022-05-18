const express = require('express');
const UsersController = require('../Controllers/users.controller');

const route = express();

route.get('/', UsersController.getAll);
route.get('/:id', UsersController.getById);
route.post('/', UsersController.create);

module.exports = route;
