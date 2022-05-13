require('dotevn').config();
const jwt = require('jasonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = (payload) => (jwt.sign({ payload }, process.env.SECRET, jwtConfig));
