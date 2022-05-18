const { generateToken } = require('../Auth/generateToken');
const { Users } = require('../database/models');

const postLogin = async (email, password) => {
  try {
    const user = await Users.findOne({
      raw: true,
      where: {
        email,
        password,
      },
      attributes: { exclude: ['password']}
    });

    if (!user) return null;
    const token = generateToken(user);
    return token;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  postLogin,
};
