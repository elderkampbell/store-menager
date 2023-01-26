const { newProductSchema } = require('./schemas');

const newProductValidation = (name) => {
  const { error } = newProductSchema.validate({ name });
  if (error) {
    return {
      type: name ? 'INVALID_VALUE' : 'UNDEFINED_VALUE',
      message: error.message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  newProductValidation,
};
