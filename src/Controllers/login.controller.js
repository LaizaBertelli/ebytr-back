const LoginService = require('../Services/login.service');

const createLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await LoginService.postLogin(email, password);
    console.log(token);
    if (!token) return res.status(401).json({ message: 'Invalid email or password' });
  
    return res.status(200).json({ token });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  createLogin,
};
