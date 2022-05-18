require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  return jwt.sign({payload}, process.env.JWT_SECRET, jwtConfig);
}

module.exports = {
  generateToken,
};
