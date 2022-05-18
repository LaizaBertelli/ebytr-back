const { httpException } = require('../Middlewares/error.middleware');
const UsersService = require('../Services/users.service');

const getUsers = async (req, res, next) => {
  try {
    const users = await UsersService.getUsers();

    if (!users) return next(httpException(404, 'Users not found'));

    return res.status(200).json({ users });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  getUsers,
};
