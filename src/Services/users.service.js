const { Users } = require('../database/models');

const getUsers = async () => {
  try {
    const users = await Users.findAll({ raw: true, attributes: { exclude: ['password'] } });

    if (!users) return null;

    return users;
  } catch (e) {
    throw new Error(e);
  } 
}

module.exports = {
  getUsers,
};
