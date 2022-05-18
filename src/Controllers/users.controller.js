const UsersService = require('../Services/users.service');

const getAll = async (req, res, next) => {
  try {
    const users = await UsersService.getAll();

    if (!users) return res.status(404).json({ message: 'Users not found' });

    return res.status(200).json({ users });
  } catch (e) {
    return next(e);
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UsersService.getById(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ user });
  } catch (e) {
    return next(e);
  }
}

const create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await UsersService.create(email, username, password);

    return res.status(201).json(newUser);
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  getAll,
  getById,
  create,
};
