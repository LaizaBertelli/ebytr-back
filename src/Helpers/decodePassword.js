const { dencode } = require('node-encoder');

const encodePassword = (encoded) => {
  return dencode(encoded);
}

module.exports = encodePassword;