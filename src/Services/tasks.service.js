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

module.exports = {
  getAll,
};
