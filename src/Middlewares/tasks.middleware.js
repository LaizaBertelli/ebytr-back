const { TasksSchema } = require("../Schemas/tasks.schema");
const UsersService = require('../Services/users.service');

const validateTasks = (req, res, next) => {
  const { status, description, title  } = req.body;
  const { error } = TasksSchema.validate({ status, description, title });

  if (error) {
    const completeError = error.message.split('|');
    return res.status(completeError[0]).json({ message: completeError[1]});
  }

  return next();
};

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  const user = await UsersService.getById(id);
  if (!user) return res.status(404).json({ message: 'Invalid user id' });

  return next();
}

module.exports = {
  validateTasks,
  validateUserId,
};
