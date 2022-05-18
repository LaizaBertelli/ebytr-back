const Joi = require('joi');

const EMPTY =  '400|No empty fields allowed';

const TasksSchema = Joi.object({
  status: Joi.string()
    .required()
    .messages({
      'any.required': EMPTY,
      'string.empty': EMPTY,
    }),
  title: Joi.string()
    .min(4)
    .max(25)
    .required()
    .messages({
      'any.required': EMPTY,
      'string.empty': EMPTY,
      'string.min': '401|Title is too small',
      'string.max': '401|Title is too large',
    }),
  description: Joi.string()
    .max(140)
    .messages({
      'string.max': '401|Description is too large',
    }),
});

module.exports = {
  TasksSchema,
};
