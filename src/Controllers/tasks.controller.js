const TasksService = require('../Services/tasks.service');

const getAll = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await TasksService.getAll(id);

    if (!tasks) return res.status(404).json({ message:'Tasks not found' });

    return res.status(200).json({ tasks });
  } catch (e) {
    return next(e);
  }
}

const create = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, description, title} = req.body;
    const newTask = await TasksService.create(id, status, description, title);

    return res.status(201).json(newTask);
  } catch (e) {
    return next(e);
  }
}

const edit = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;
    await TasksService.edit(id, status, description, title);

    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await TasksService.deleteTask(id);

    if (!deleted) return res.status(404).json({ message: 'Task not found' });

    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  getAll,
  create,
  edit,
  deleteTask,
};
