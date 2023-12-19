const Joi = require('joi');

const createUserSchema = (body) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'O campo "name" é obrigatório',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'O campo "email" é obrigatório',
      'string.email': 'O campo "email" deve ser um email válido',
    }),
    password: Joi.string().min(6).required().messages({
      'any.required': 'O campo "password" é obrigatório',
      'string.min': 'O campo "password" deve ter pelo menos 6 caracteres',
    }),
    address: Joi.object({
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
    }).required().messages({
      'any.required': 'Todos os campos de endereço são obrigatórios',
    }),
  });

  return schema.validate(body, { abortEarly: false });
};

module.exports = createUserSchema;
