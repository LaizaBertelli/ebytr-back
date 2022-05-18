require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  console.log(payload)
  return jwt.sign({payload}, 'GALO', jwtConfig);
}

module.exports = {
  generateToken,
};
