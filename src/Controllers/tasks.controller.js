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

module.exports = {
  getAll,
};
