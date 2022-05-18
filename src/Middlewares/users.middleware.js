const { UsersSchema } = require("../Schemas/users.schema");

const validateUsers = (req, res, next) => {
  const { email, password, username } = req.body;
  const { error } = UsersSchema.validate({ email, password, username });

  if (error) {
    const completeError = error.message.split('|');
    return res.status(completeError[0]).json({ message: completeError[1]});
  }

  return next();
};

module.exports = {
  validateUsers,
};
