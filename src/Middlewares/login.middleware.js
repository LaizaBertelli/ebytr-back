const { LoginSchema } = require("../Schemas/login.schema");

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = LoginSchema.validate({ email, password });

  if (error) {
    const completeError = error.message.split('|');
    return res.status(completeError[0]).json({ message: completeError[1]});
  }

  return next();
};

module.exports = {
  validateLogin,
};
