const { Tasks } = require('../database/models');

const getAll = async (id) => {
  try {
    const tasks = await Tasks.findAll({
      raw: true,
      where: {
        userId: id,
      }
    });

    if (tasks.length === 0) return null;

    return tasks;
  } catch (e) {
    throw new Error(e);
  }
}

const create = async (userId, status, description, title) => {
  try {
    const newTask = await Tasks.create({
      userId,
      status,
      description,
      title
    });

    return newTask;
  } catch (e) {
    throw new Error(e);
  }
}

const edit = async (id, status, description, title) => {
  try {
    const editedTask = await Tasks.update(
      {
        status,
        description,
        title,
      },
      { where: { id } });
  
    return editedTask;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  getAll,
  create,
  edit,
};
