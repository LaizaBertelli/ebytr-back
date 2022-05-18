const express = require('express');
const TasksController = require('../Controllers/tasks.controller');
const { validateTasks } = require('../Middlewares/tasks.middleware');

const route = express();

route.get('/:id', TasksController.getAll);
route.post('/:id', validateTasks, TasksController.create);

module.exports = route;
