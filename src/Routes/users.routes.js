const express = require('express');
const UsersController = require('../Controllers/users.controller');
const { validateUsers } = require('../Middlewares/users.middleware');


const route = express();

route.get('/', UsersController.getAll);
route.get('/:id', UsersController.getById);
route.post('/', validateUsers, UsersController.create);

module.exports = route;
