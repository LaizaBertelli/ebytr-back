const Joi = require('joi');

const EMPTY =  '400|No empty fields allowed';
const INVALID = '401|Invalid email or password';

const LoginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': EMPTY,
      'string.email': INVALID,
      'string.empty': EMPTY,
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'any.required': EMPTY,
      'string.empty': EMPTY,
      'string.min': INVALID,
    }),
});

module.exports = {
  LoginSchema,
};
