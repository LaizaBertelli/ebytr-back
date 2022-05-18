require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Missing authorization header' });
    }

    jwt.verify(token, process.env.SECRET, async (error, decoded) => {
      if (error) return res.status(401).json({ message: 'Expired or invalid token' });
      const user = await User.findOne({ where: { email: decoded.data.email } });

      if (!user.dataValue.email) return res.status(401).json({ message: 'Unauthorized token' });
    });

    return next();
  } catch (e) {
    return next(e);
  }
}
