const express = require('express');
const TasksController = require('../Controllers/tasks.controller');
const { validateTasks, validateUserId } = require('../Middlewares/tasks.middleware');

const route = express();

route.get('/:id', TasksController.getAll);
route.post('/:id', [ validateUserId, validateTasks ], TasksController.create);
route.put('/:id', validateTasks, TasksController.edit);

module.exports = route;
