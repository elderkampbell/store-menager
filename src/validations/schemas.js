const Joi = require('joi');

const newProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = {
  newProductSchema,
};
