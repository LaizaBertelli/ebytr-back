const Joi = require('joi');

const EMPTY =  '400|No empty fields allowed';

const UsersSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': EMPTY,
      'string.email': '400|Invalid password',
      'string.empty': EMPTY,
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'any.required': EMPTY,
      'string.empty': EMPTY,
      'string.min': '400|Invalid email',
    }),
  username: Joi.string()
    .min(4)
    .max(10)
    .messages({
      'any.required': EMPTY,
      'string.empty': EMPTY,
      'string.min': '400|Invalid username',
      'string.max': '400|Invalid username',
    }),
});

module.exports = {
  UsersSchema,
};
