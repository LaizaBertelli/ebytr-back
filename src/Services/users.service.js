const { Users } = require('../database/models');
const encodePassword = require('../Helpers/encodePassword');

const getAll = async () => {
  try {
    const users = await Users.findAll({ raw: true, attributes: { exclude: ['password'] } });

    if (!users) return null;

    return users;
  } catch (e) {
    throw new Error(e);
  } 
}

const getById = async (id) => {
  try {
    const user = await Users.findByPk(id);

    if (!user) return null;

    return user;
  } catch (e) {
    throw new Error(e);
  }
}

const create = async (email, username, password) => {
  try {
    const encodedPassword = encodePassword(password);
    const newUser = await Users.create({
      username,
      email,
      password: encodedPassword,
    });
    
    return newUser;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
