const { generateToken } = require('../Auth/generateToken');
const { Users } = require('../database/models');
const encodePassword = require('../Helpers/encodePassword');

const postLogin = async (email, password) => {
  try {
    const encodePass = encodePassword(password);
    const user = await Users.findOne({
      raw: true,
      where: {
        email,
        password: encodePass,
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
