const { encode } = require('node-encoder');

const encodePassword = (payload) => {
  return encode(payload);
}

module.exports = encodePassword;