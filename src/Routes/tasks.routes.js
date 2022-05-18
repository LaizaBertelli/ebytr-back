const express = require('express');
const TasksController = require('../Controllers/tasks.controller');

const route = express();

route.get('/:id', TasksController.getAll);

module.exports = route;
